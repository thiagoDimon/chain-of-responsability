"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nome, senha, email) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    setEmail(email) {
        this.email = email;
    }
    getNome() {
        return this.nome;
    }
    getSenha() {
        return this.senha;
    }
    getEmail() {
        return this.email;
    }
}
exports.default = Usuario;
