"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TudoValido_1 = __importDefault(require("./TudoValido"));
const ValidadorEmail_1 = __importDefault(require("./ValidadorEmail"));
const ValidadorNome_1 = __importDefault(require("./ValidadorNome"));
const ValidadorSenha_1 = __importDefault(require("./ValidadorSenha"));
class ValidarUsuario {
    verificar(usuario) {
        const validadorNome = new ValidadorNome_1.default();
        const validadorSenha = new ValidadorSenha_1.default();
        const validadorEmail = new ValidadorEmail_1.default();
        const tudoValido = new TudoValido_1.default();
        validadorNome.setProximo(validadorSenha);
        validadorSenha.setProximo(validadorEmail);
        validadorEmail.setProximo(tudoValido);
        validadorNome.validar(usuario);
    }
}
exports.default = ValidarUsuario;
