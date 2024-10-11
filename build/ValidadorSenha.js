"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidadorSenha {
    constructor() {
        this.proximo = undefined;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(usuario) {
        const senha = usuario.getSenha();
        if (senha.length < 8) {
            console.log("Senha fraca");
        }
        else if (this.proximo) {
            this.proximo.validar(usuario);
        }
    }
}
exports.default = ValidadorSenha;
