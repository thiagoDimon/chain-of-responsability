import TudoValido from "./TudoValido";
import Usuario from "./Usuario";
import ValidadorEmail from "./ValidadorEmail";
import ValidadorNome from "./ValidadorNome";
import ValidadorSenha from "./ValidadorSenha";

export default class ValidarUsuario {
  verificar(usuario: Usuario) {
    const validadorNome = new ValidadorNome();
    const validadorSenha = new ValidadorSenha();
    const validadorEmail = new ValidadorEmail();
    const tudoValido = new TudoValido();

    validadorNome.setProximo(validadorSenha);
    validadorSenha.setProximo(validadorEmail);
    validadorEmail.setProximo(tudoValido);

    validadorNome.validar(usuario);
  }
}
