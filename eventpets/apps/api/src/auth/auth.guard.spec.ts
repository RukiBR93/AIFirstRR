import { UnauthorizedException } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { SupabaseService } from './supabase.service';

function criarContext(headers: Record<string, string>, request: any = {}) {
  const req = { headers, ...request };
  return {
    switchToHttp: () => ({
      getRequest: () => req,
    }),
  } as unknown as ExecutionContext;
}

describe('AuthGuard', () => {
  let getUser: jest.Mock;
  let guard: AuthGuard;

  beforeEach(() => {
    getUser = jest.fn();
    const supabase = { client: { auth: { getUser } } } as unknown as SupabaseService;
    guard = new AuthGuard(supabase);
  });

  it('lança UnauthorizedException quando não há header Authorization', async () => {
    const context = criarContext({});

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    expect(getUser).not.toHaveBeenCalled();
  });

  it('lança UnauthorizedException quando o header não começa com "Bearer "', async () => {
    const context = criarContext({ authorization: 'Basic abc123' });

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
  });

  it('lança UnauthorizedException quando o Supabase retorna erro ou usuário nulo', async () => {
    getUser.mockResolvedValue({ data: { user: null }, error: new Error('token expirado') });
    const context = criarContext({ authorization: 'Bearer token-invalido' });

    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    expect(getUser).toHaveBeenCalledWith('token-invalido');
  });

  it('permite acesso e popula request.user quando o token é válido', async () => {
    const usuario = { id: 'tutor-1', email: 'tutor@example.com' };
    getUser.mockResolvedValue({ data: { user: usuario }, error: null });
    const req = { headers: { authorization: 'Bearer token-valido' } };
    const context = {
      switchToHttp: () => ({ getRequest: () => req }),
    } as unknown as ExecutionContext;

    const resultado = await guard.canActivate(context);

    expect(resultado).toBe(true);
    expect((req as any).user).toEqual(usuario);
  });
});
