# BPReserva

## Descrição

O BPReserva é um sistema de agendamentos projetado para dois tipos de usuários: "Beneficiário" (cliente) e "Representante" (corretor de seguros). Os beneficiários podem agendar encontros com representantes disponíveis na data e horário desejados, garantindo que o representante não tenha agendamentos no mesmo período. O sistema impõe uma duração mínima de 30 minutos e máxima de 2 horas para os agendamentos.

## Pré-requisitos

Certifique-se de ter as seguintes tecnologias instaladas:

- [Vue.js](https://vuejs.org/) (v.2)
- [Node.js](https://nodejs.org/) (v.20)

## Instalação

Execute o seguinte comando nas raízes das pastas `app` e `api` para instalar as dependências:

```bash
npm install
```

## Como Usar

1. Configure os arquivos `.env` da API com a autorização do MongoDB e adicione a URL do front-end para exceção de CORS. Exemplo:

### .env da API
MONGO=your_mongodb_connection_string
URL_APP_VUE=http://localhost:8080


2. Configure o arquivo `.env` da aplicação com a URL e porta em que a API está sendo executada. Exemplo:

### .env da aplicação
VUE_APP_IP_API=http://localhost
VUE_APP_PORT_REST=3000


3. Após configurar os arquivos `.env`, acesse a raiz da pasta `app` e execute o seguinte comando no terminal:

```bash
npm run serve
```

4. Na raiz da pasta `api`, execute o seguinte comando no terminal:

```bash
npm run start
```

Feito isso, o sistema estará pronto para uso.

## Status do Projeto

Em desenvolvimento

## Tecnologias Utilizadas

- [Vue.js](https://vuejs.org/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)