import { IsString, IsEmail, MinLength, Matches } from 'class-validator';

export class RegistroDto {
  @IsString()
  nome_usuario: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @Matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, { message: 'A senha deve incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.' })
  senha: string;
}
