const { registrar, leer } = require("./operaciones");
const [operacion, nombre, edad, tipoDeAnimal, colorAnimal, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombre, edad, tipoDeAnimal, colorAnimal, enfermedad);
}
if (operacion === "leer") {
  leer();
}
