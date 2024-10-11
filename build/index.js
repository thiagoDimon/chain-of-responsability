"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
const ValidarUsuario_1 = __importDefault(require("./ValidarUsuario"));
const usuario1 = new Usuario_1.default("Thiago Dimon Miranda", "12345678", "thiago@gmail.com");
const validarUsuario = new ValidarUsuario_1.default();
validarUsuario.verificar(usuario1);
