import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';

// Módulo "Auth/Autorização" do C3: valida a identidade do tutor/familiar
// antes de deixar a requisição chegar aos demais módulos (Mascotas,
// Carné, Eventos, Recordatórios).
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly supabase: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader: string | undefined = request.headers['authorization'];

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token ausente');
    }

    const token = authHeader.replace('Bearer ', '');
    const { data, error } = await this.supabase.client.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedException('Token inválido');
    }

    // Disponibiliza o usuário autenticado para os controllers/services.
    request.user = data.user;
    return true;
  }
}
