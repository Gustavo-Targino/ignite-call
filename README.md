# Ignite Call

Ignite Call é uma aplicação web desenvolvida com o objetivo de facilitar agendamentos integrados com o Google Calendar. Este projeto utiliza uma stack moderna que inclui **Next.js**, **NextAuth.js**, **Prisma** e **PostgreSQL**.

## 📋 Tecnologias

- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor e construção de aplicações web modernas, além do uso de API Routes.
- **[NextAuth.js](https://next-auth.js.org/)**: Gerenciamento de autenticação com suporte ao OAuth 2.0.
- **[Prisma](https://www.prisma.io/)**: ORM moderno para conectar e gerenciar o banco de dados **PostgreSQL**.
- **Google Calendar API**: Integração para agendamentos dinâmicos e gerenciamento de eventos.

## 🚀 Funcionalidades

- Login e autenticação utilizando o Google via OAuth.
- Integração com o Google Calendar para criar, editar e visualizar eventos.
- Interface dinâmica e responsiva para gerenciar agendamentos.
- Armazenamento de dados em banco de dados relacional com Prisma e PostgreSQL.
- Uso de API Routes

## 🔧 Configuração e Uso

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/gustavo-targino/ignite-call.git
   cd ignite-call
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configuração do ambiente**:

   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```env
     GOOGLE_CLIENT_ID=seu_client_id
     GOOGLE_CLIENT_SECRET=seu_client_secret
     NEXTAUTH_URL=http://localhost:3000
     DATABASE_URL=postgresql://usuario:senha@localhost:5432/ignitecall
     ```

4. **Configurar o Prisma**:

   ```bash
   npx prisma migrate dev
   ```

5. **Iniciar a aplicação**:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## 📚 Documentação

- **Prisma**: Gerencie o banco de dados e esquemas utilizando os comandos do Prisma.
- **NextAuth**: Para configurar provedores adicionais, consulte a [documentação oficial](https://next-auth.js.org/getting-started/introduction).
- **Google Calendar API**: Certifique-se de configurar as permissões corretas no Google Cloud Console.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---
