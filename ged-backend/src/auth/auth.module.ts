/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      // Use uma variável de ambiente para a chave secreta em produção!
      secret: process.env.JWT_SECRET_KEY || 'default_jwt_secret_key',
      signOptions: { expiresIn: '1h' }, // Define o tempo de expiração do token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Exporta o serviço para ser usado em outros módulos
})
export class AuthModule { }
