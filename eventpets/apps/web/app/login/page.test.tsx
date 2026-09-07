import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './page';

const { mockPush } = vi.hoisted(() => ({ mockPush: vi.fn() }));
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

const { mockSignInWithPassword } = vi.hoisted(() => ({
  mockSignInWithPassword: vi.fn(),
}));
vi.mock('../../lib/supabaseClient', () => ({
  supabase: {
    auth: {
      signInWithPassword: mockSignInWithPassword,
    },
  },
}));

describe('LoginPage', () => {
  beforeEach(() => {
    mockPush.mockClear();
    mockSignInWithPassword.mockReset();
  });

  it('mantém o botão desabilitado até preencher e-mail e senha', () => {
    render(<LoginPage />);
    expect(screen.getByRole('button', { name: /entrar/i })).toBeDisabled();
  });

  it('autentica e redireciona para /mascotas/new quando as credenciais são válidas', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText(/e-mail/i), 'tutor@example.com');
    await user.type(screen.getByLabelText(/senha/i), 'senha-123');
    await user.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/mascotas/new'));
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: 'tutor@example.com',
      password: 'senha-123',
    });
  });

  it('exibe mensagem de erro quando a autenticação falha', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: { message: 'Credenciais inválidas' } });
    const user = userEvent.setup();
    render(<LoginPage />);

    await user.type(screen.getByLabelText(/e-mail/i), 'tutor@example.com');
    await user.type(screen.getByLabelText(/senha/i), 'senha-errada');
    await user.click(screen.getByRole('button', { name: /entrar/i }));

    expect(await screen.findByText('Credenciais inválidas')).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });
});
