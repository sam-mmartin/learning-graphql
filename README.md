## Learning GraphQL

### Pré-requisitos

Antes de começar você precisa ter instalado na sua máquina
as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/#build)

### Rodando a aplicação

```bash
# Criar a imagem da aplicação
$ docker build -t <NOME-DA-IMAGEM> .
# Executar o container
$ docker run -d -p 3000:3000 <NOME-DA-IMAGEM>
```

> **-d** executa o container no modo desanexado (em segundo plano).
> <br> **-p 3000:3000** mapeia a porta 3000 do host para a porta 3000 da aplicação.
