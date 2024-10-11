export default class Usuario {
  private nome: string;
  private senha: string;
  private email: string;

  constructor(nome: string, senha: string, email: string) {
    this.nome = nome;
    this.senha = senha;
    this.email = email;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  setSenha(senha: string) {
    this.senha = senha;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getNome(): string {
    return this.nome;
  }

  getSenha(): string {
    return this.senha;
  }

  getEmail(): string {
    return this.email;
  }
}
