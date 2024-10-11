"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidadorNome {
    constructor() {
        this.proximo = undefined;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(usuario) {
        const nome = usuario.getNome();
        if (nome.length < 3) {
            console.log("Nome inválido");
        }
        else if (this.proximo) {
            this.proximo.validar(usuario);
        }
    }
}
exports.default = ValidadorNome;
