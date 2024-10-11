import Usuario from "./Usuario";
import Validador from "./Validador";

export default class TudoValido implements Validador {
  validar(usuario: Usuario): void {
    console.log(
      "Sucesso, todos os dados estão validos para o usuário:",
      usuario.getNome()
    );
  }

  setProximo(proximo: Validador): void {}
}
