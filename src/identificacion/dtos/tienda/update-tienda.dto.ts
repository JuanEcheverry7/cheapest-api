import { IsOptional, IsString } from 'class-validator';

export class UpdateTiendaDto {
    @IsOptional()
    @IsString()
    nombreComercial?: string;

    @IsOptional()
    @IsString()
    rut?: string;
}