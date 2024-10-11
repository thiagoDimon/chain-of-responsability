# Chain Of Responsibility

- O padrão Chain of Responsibility evita o acoplamento do remetente de uma solicitação ao seu receptor, dando a mais de um objeto a oportunidade de tratar a solicitação.
- Este padrão encadeia os objetos receptores, passando a solicitação ao longo da cadeia até que um objeto a trate.

## Sobre o exercício
- Exercício de fixação desenvolvido durante a aula de Design Patterns. Para realizar a implementação do padrão Chain Of Responsibility foi proposto desenvolver um sistema de validação de formulário de cadastro de
usuário.
- O formulário tem três campos obrigatórios: nome, email, e senha.
- Cada campo deve ser validado de forma independente, e, caso a validação falhe em algum campo, a cadeia de validação deve ser interrompida e o erro deve ser mostrado.

## Executando o Projeto
```bash copy
https://github.com/thiagoDimon/chain-of-responsobility.git
```
```bash copy
npm install
```
```bash copy
npm run dev
```
