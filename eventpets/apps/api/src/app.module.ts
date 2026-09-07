import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MascotasModule } from './mascotas/mascotas.module';
// Módulos ainda não implementados (aguardando spec de suas features):
// import { CarneModule } from './carne/carne.module';
// import { EventosModule } from './eventos/eventos.module';
// import { RecordatoriosModule } from './recordatorios/recordatorios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    MascotasModule,
  ],
})
export class AppModule {}
