import Usuario from "./Usuario";
import ValidarUsuario from "./ValidarUsuario";

const usuario1 = new Usuario(
  "Thiago Dimon Miranda",
  "12345678",
  "thiago@gmail.com"
);
const usuario2 = new Usuario("Er", "87654321", "er@outlook.com");
const usuario3 = new Usuario("Diego", "12345", "diego@gmail.com");
const usuario4 = new Usuario("Lucas", "Er14658#4", "lucasEmail.com");

let validarUsuario = new ValidarUsuario();
validarUsuario.verificar(usuario1);

validarUsuario = new ValidarUsuario();
validarUsuario.verificar(usuario2);

validarUsuario = new ValidarUsuario();
validarUsuario.verificar(usuario3);

validarUsuario = new ValidarUsuario();
validarUsuario.verificar(usuario4);
