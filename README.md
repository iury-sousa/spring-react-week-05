# DevSuperior Week 05

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a4a7e76-f984-46d5-9e10-920126ed4002/deploy-status)](https://app.netlify.com/sites/dsvendas-iury/deploys)

## Sobre o projeto

Esse projeto faz parte da Semana Spring React realizado pela DevSuperior.

O propósito do presente projeto é implementar uma pagína de dashboard para a visualização de estatísticas de vendas. Para tal, foi utilizado o [React](https://pt-br.reactjs.org/) como framework de frontend e o [Spring](https://spring.io/) para backend.

> Acesse o link https://dsvendas-iury.netlify.app/ para ver em produção.

---

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- Controle de versão

  - [Git](https://git-scm.com)

- Frontend

  - [Node.js](https://nodejs.org/en/)
  - [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
  - [VSCode](https://code.visualstudio.com/)

- Backend
  - [JDK](https://www.azul.com/downloads/?package=jdk)
  - [Spring Tools](https://spring.io/tools)
  - [Postgresql](https://www.postgresql.org/download/)

## Como executar

```bash
# Clone este repositório
$ git clone https://github.com/iury-sousa/spring-react-week-05.git

```

### Frontend

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn install ou yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

### Backend

```bash

```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Vite](https://vitejs.dev/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started)
- [ApexCharts](https://apexcharts.com/docs/react-charts/)
- [Spring](https://spring.io/)
- [Postgresql](https://www.postgresql.org/download/)

## Melhorias

Abaixo serão listadas as diferenças/melhorias que implementei em relação ao que foi passado.

- O projeto foi criado utilizando o [Vite](https://vitejs.dev/) ao invés do `create-react-app`. O beneficio nessa mudança é a velocidade na criação do projeto, sendo quase que instantânea.

- Foi implementado o Eslint, Prettier e Husky para analisar, formatar e garantir que o código não seja commitado com erros de formatação ou sintaxe.
- Utilizado o Java na versão 17 LTS.
