# cookRank

Um aplicativo de receitas com IA, gamificação, compartilhamento. Avaliação de receitas via IA, comparação com o resultado ideal, feedback da comunidade, progressão de nível, badges e segurança contra fraudes. Resultados e socialização, acessível em mobile e web, com funcionalidades completas.

## Funcionalidades

- **Autenticação**: Registro e login de usuários.
- **Receitas**: Criar e listar receitas.
- **Submissões**: Enviar fotos de receitas feitas, avaliação por IA.
- **Gamificação**: Níveis, experiência e badges.
- **Social**: Seguir usuários, comentários, likes.
- **IA**: Análise de imagens para feedback.

## Tecnologias

- Backend: Node.js, Express, TypeScript
- Banco: PostgreSQL com Prisma
- Autenticação: JWT
- Validação: express-validator

## Instalação

1. Clone o repositório.
2. Entre no diretório backend: `cd backend`
3. Instale dependências: `npm install`
4. Configure o .env baseado em .env.example
5. Execute migrações: `npx prisma migrate dev`
6. Gere cliente: `npx prisma generate`
7. Inicie o servidor: `npm start`

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/users/profile
- POST /api/recipes
- GET /api/recipes
- POST /api/submissions
- GET /api/submissions
- POST /api/ai/analyze
