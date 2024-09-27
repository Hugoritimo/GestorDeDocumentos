/* eslint-disable prettier/prettier */
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // Endpoint para registrar um novo usuário
    @Post('register')
    async register(@Body() body: { email: string; password: string }) {
        const { email, password } = body;

        // Certifique-se de que a senha não é vazia
        if (!password) {
            throw new BadRequestException('A senha não pode ser vazia');
        }

        // Criptografa a senha usando o serviço de autenticação
        const hashedPassword = await this.authService.hashPassword(password);

        // Simula a lógica para salvar o usuário no banco de dados
        const user = { id: Date.now(), email, password: hashedPassword };

        // Retorna um token JWT para o usuário registrado
        return {
            token: await this.authService.generateToken(user.id),
        };
    }

    // Endpoint para fazer login de um usuário
    @Post('login')
    async login(@Body() body: { email: string; password: string }) {
        const { email, password } = body;

        // Simule a lógica de buscar o usuário no banco de dados
        // OBS: Você deve substituir isso pela lógica real para buscar do banco
        const simulatedUser = {
            id: 1,
            email: 'user@example.com',
            password: '$2b$10$F2r9m5ZD3L6GcPtibdDK5OmEFjt6BS8F9Hg2sWIm83PyBGWI7T6ti' // Hash gerado para "password123"
        };

        // Verifica se o e-mail corresponde
        if (simulatedUser.email !== email) {
            throw new BadRequestException('Invalid credentials');
        }

        // Verifica se a senha está correta usando o serviço de autenticação
        const isPasswordValid = await this.authService.validatePassword(password, simulatedUser.password);
        if (!isPasswordValid) {
            throw new BadRequestException('Invalid credentials');
        }

        // Retorna um token JWT para o usuário logado
        return {
            token: await this.authService.generateToken(simulatedUser.id),
        };
    }
}
