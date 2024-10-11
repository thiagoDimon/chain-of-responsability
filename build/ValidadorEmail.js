"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidadorEmail {
    constructor() {
        this.proximo = undefined;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(usuario) {
        const index = usuario.getEmail().indexOf("@");
        if (index === -1) {
            console.log("Email inválido");
        }
        else if (this.proximo) {
            this.proximo.validar(usuario);
        }
    }
}
exports.default = ValidadorEmail;
