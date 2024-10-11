import Usuario from "./Usuario";
import Validador from "./Validador";

export default class ValidadorSenha implements Validador {
  private proximo?: Validador = undefined;

  setProximo(proximo: Validador): void {
    this.proximo = proximo;
  }

  validar(usuario: Usuario): void {
    const senha = usuario.getSenha();
    if (senha.length < 8) {
      console.log(
        "A senha precisa ter ao menos oito digitos para o usuário:",
        usuario.getNome()
      );
    } else if (this.proximo) {
      this.proximo.validar(usuario);
    }
  }
}
