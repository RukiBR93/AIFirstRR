import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaMascotaPage from './page';

const { mockPush } = vi.hoisted(() => ({ mockPush: vi.fn() }));
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

const { mockGetSession } = vi.hoisted(() => ({ mockGetSession: vi.fn() }));
vi.mock('../../../lib/supabaseClient', () => ({
  supabase: {
    auth: {
      getSession: mockGetSession,
    },
  },
}));

const sessaoAtiva = {
  data: { session: { access_token: 'token-123', user: { id: 'tutor-1' } } },
};

async function preencherFormulario(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/^nome/i), 'Rex');
  await user.type(screen.getByLabelText(/^raça/i), 'Labrador');
  await user.type(screen.getByLabelText(/^idade/i), '3');
}

describe('NovaMascotaPage', () => {
  beforeEach(() => {
    mockPush.mockClear();
    mockGetSession.mockReset();
    vi.unstubAllGlobals();
  });

  it('redireciona para /login quando não há sessão ativa', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null } });

    render(<NovaMascotaPage />);

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/login'));
    expect(screen.queryByText('Nova mascota')).not.toBeInTheDocument();
  });

  it('mantém o botão desabilitado até preencher os campos obrigatórios', async () => {
    mockGetSession.mockResolvedValue(sessaoAtiva);

    render(<NovaMascotaPage />);

    expect(await screen.findByText('Nova mascota')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeDisabled();
  });

  it('cadastra a mascota e exibe mensagem de sucesso', async () => {
    mockGetSession.mockResolvedValue(sessaoAtiva);
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<NovaMascotaPage />);
    await screen.findByText('Nova mascota');

    await preencherFormulario(user);
    await user.click(screen.getByRole('button', { name: /cadastrar/i }));

    expect(await screen.findByText(/cadastrada com sucesso/i)).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/mascotas'),
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ Authorization: 'Bearer token-123' }),
      }),
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body).toEqual({
      nome: 'Rex',
      tipo_animal: 'perro',
      raca: 'Labrador',
      sexo: 'macho',
      idade: 3,
    });
  });

  it('exibe mensagem de erro quando o cadastro falha', async () => {
    mockGetSession.mockResolvedValue(sessaoAtiva);
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ error: 'raça inválida' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<NovaMascotaPage />);
    await screen.findByText('Nova mascota');

    await preencherFormulario(user);
    await user.click(screen.getByRole('button', { name: /cadastrar/i }));

    expect(await screen.findByText('raça inválida')).toBeInTheDocument();
    expect(screen.queryByText(/cadastrada com sucesso/i)).not.toBeInTheDocument();
  });
});
