import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';

@Module({
  imports: [AuthModule],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}
