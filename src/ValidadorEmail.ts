import Usuario from "./Usuario";
import Validador from "./Validador";

export default class ValidadorEmail implements Validador {
  private proximo?: Validador = undefined;

  setProximo(proximo: Validador): void {
    this.proximo = proximo;
  }

  validar(usuario: Usuario): void {
    const index = usuario.getEmail().indexOf("@");
    if (index === -1) {
      console.log("O email para ser válido precisa de @:", usuario.getNome());
    } else if (this.proximo) {
      this.proximo.validar(usuario);
    }
  }
}
