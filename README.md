# Cadastro de Usuários — Interface React + Vite

Interface web de cadastro e listagem de usuários integrada a uma API REST própria, desenvolvida com React, Vite e CSS puro.

Projeto de estudo desenvolvido a partir de um curso, com ajustes de configuração de variáveis de ambiente e publicação em produção.

🔗 **Demo em produção:** [react-vite-crud-kappa.vercel.app](https://react-vite-crud-kappa.vercel.app)
🔙 **API REST consumida por este projeto:** [node-express-prisma-crud](https://github.com/joaoaquino-dev/node-express-prisma-crud)

## Tecnologias

- React 19
- Vite
- Axios
- CSS3

## Funcionalidades

- Listagem de usuários cadastrados na API
- Criação de novos usuários (nome, idade e e-mail)
- Remoção de usuários pelo ID
- Integração com backend via variável de ambiente (`VITE_API_URL`)

## Como rodar localmente

Pré-requisitos: Node.js e a API (`node-express-prisma-crud`) rodando ou acessível via URL.

1. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/joaoaquino-dev/react-vite-crud
cd react-vite-crud
npm install
```

2. Crie o arquivo `.env` a partir do `.env.example` e informe a URL da API:

```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Limitações e próximos passos

- Adicionar edição de usuário (rota `PUT /users/:id` já existe na API).
- Adicionar feedback visual de carregamento e tratamento de erro quando a API estiver hibernando no Render.
- Validar campos no formulário antes do envio.

## Como o projeto foi feito

Projeto de estudo construído a partir de aula/tutorial e publicado na Vercel. A documentação foi revisada com apoio de IA.

## Autor

João Aquino · [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-aquino-dev) · [GitHub](https://github.com/joaoaquino-dev)
