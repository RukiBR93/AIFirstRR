import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

const { mockGetSession, mockOnAuthStateChange } = vi.hoisted(() => ({
  mockGetSession: vi.fn(),
  mockOnAuthStateChange: vi.fn(() => ({
    data: { subscription: { unsubscribe: vi.fn() } },
  })),
}));

vi.mock('../lib/supabaseClient', () => ({
  supabase: {
    auth: {
      getSession: mockGetSession,
      onAuthStateChange: mockOnAuthStateChange,
      signOut: vi.fn(),
    },
  },
}));

describe('HomePage', () => {
  beforeEach(() => {
    mockGetSession.mockReset();
    vi.unstubAllGlobals();
  });

  it('sem sessão ativa, mostra convite para entrar e não busca mascotas', async () => {
    mockGetSession.mockResolvedValue({ data: { session: null } });
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    render(<HomePage />);

    expect(await screen.findByText(/primeiro/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('com sessão ativa, busca e exibe as mascotas do tutor', async () => {
    mockGetSession.mockResolvedValue({
      data: {
        session: { user: { email: 'tutor@example.com' }, access_token: 'token-123' },
      },
    });
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: '1',
          nome: 'Rex',
          tipo_animal: 'perro',
          raca: 'Labrador',
          sexo: 'macho',
          idade: 3,
          foto_url: null,
          status: 'ativa',
        },
      ],
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<HomePage />);

    expect(await screen.findByText(/Rex/)).toBeInTheDocument();
    expect(screen.getByText(/tutor@example.com/)).toBeInTheDocument();
  });
});
