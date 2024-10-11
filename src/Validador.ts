export default interface Validador {
  setProximo(proximo: Validador): void;
  validar(dados: any): void;
}
