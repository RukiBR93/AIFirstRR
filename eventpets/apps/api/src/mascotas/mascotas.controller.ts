import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { MascotasService } from './mascotas.service';
import { validateCreateMascotaDto } from './dto/create-mascota.dto';

@Controller('mascotas')
@UseGuards(AuthGuard)
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Post()
  async create(@Body() body: any, @Req() req: any) {
    const erro = validateCreateMascotaDto(body);
    if (erro) throw new BadRequestException(erro);

    return this.mascotasService.create(req.user.id, body);
  }

  @Get()
  async findAll(@Req() req: any) {
    return this.mascotasService.findAllByDono(req.user.id);
  }
}
