# dependency-injection

Projeto que utiliza o conceito de inversão e injeção de dependência através do uso de interfaces e da biblioteca tsyringe.

## Como executar este projeto

- Execute o comando `npm i` ou `yarn i` para baixar as dependências
- Crie um arquivo chamado `.env` na raíz do projeto (mesmo nível que a pasta src)
  - Neste arquivo você deve colocar a chave `JWT_KEY`, que é um identificador único de sua aplicação para que os tokens jwt sejam assinados e validados pelo seu backend
- Execute o script `npm run dev` ou `yarn dev` para executar o projeto
- Modifique o arquivo da pasta `src/app/index.ts` conforme desejar e execute novamente o script mencionado acima. Boa diversão.
