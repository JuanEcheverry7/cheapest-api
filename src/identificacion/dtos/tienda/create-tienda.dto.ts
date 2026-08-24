import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTiendaDto {
    @IsString()
    @IsNotEmpty()
    nombreComercial: string;

    @IsString()
    @IsNotEmpty()
    rut: string;
}