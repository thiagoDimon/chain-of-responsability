import Usuario from "./Usuario";
import Validador from "./Validador";

export default class ValidadorNome implements Validador {
  private proximo?: Validador = undefined;

  setProximo(proximo: Validador): void {
    this.proximo = proximo;
  }

  validar(usuario: Usuario): void {
    const nome = usuario.getNome();
    if (nome.length < 3) {
      console.log(
        "O nome do usuário preciso ter ao menos três letras:",
        usuario.getNome()
      );
    } else if (this.proximo) {
      this.proximo.validar(usuario);
    }
  }
}
