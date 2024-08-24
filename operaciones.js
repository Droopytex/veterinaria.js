const fs = require("fs");

//creación de la función registrar

const registrar = (nombre, edad, tipoDeAnimal, colorAnimal, enfermedad) => {
  const datosAnimal = {
    nombreMascota: nombre,
    edad: edad,
    tipoDeAnimal: tipoDeAnimal,
    colorAnimal: colorAnimal,
    enfermedad: enfermedad,
  };
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  console.log("datos antes del push", datos);

  datos.push(datosAnimal);

  console.log("datos despues del push", datos);

  fs.writeFileSync("citas.json", JSON.stringify(datos));
};

//creación de la función registrar

const leer = () => {
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(datos);
};

module.exports = { registrar, leer };
