### Ejercicio de programación para conocer y entender los conocimientos básicos en Node js, realizando una pequeña aplicación backend para una clínica veterinaria.

## Solicitud: crear 
1. index.js: que es el archivo principal que interactuar con la aplicación. En este archivo se deberán importar las operaciones que creen y las citas en la veterinaria.
2. operaciones.js:En este archivo se deberán crear 2 funciones para:
- Registrar: Agregar una nueva cita de atención veterinaria que debe incluir:
Nombre de la mascota
Edad
Tipo de animal
Color del animal
Enfermedad
- Leer: Mostrar por consola todas las citas registradas

3. citas.json: Deberá ser un json que simplemente guarde un arreglo vacío.

Para interactuar con el archivo index.js se deberán pasar argumentos por línea de comando especificando qué función se desea ejecutar, por ejemplo:

node index.js registrar Benito “2 años” perro blanco vomitos
node index.js leer

Se deberá crear condiciones que evalúen, según el argumento correspondiente, qué función ejecutar:

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
}


if (operacion === "leer") {
    leer();
}

## Caps de pantalla
![Captura de Pantalla 2024-08-24 a la(s) 22 29 28](https://github.com/user-attachments/assets/02a3a0c5-8145-4384-bb9b-571c0a516f50)
![Captura de Pantalla 2024-08-24 a la(s) 22 29 35](https://github.com/user-attachments/assets/671415f0-bf6d-414f-b702-b53ea6ceb3f2)
![Captura de Pantalla 2024-08-24 a la(s) 22 18 11](https://github.com/user-attachments/assets/e4a25c79-4b5a-4c53-98e7-ac2881cd9d1f)
![Captura de Pantalla 2024-08-24 a la(s) 22 29 02](https://github.com/user-attachments/assets/307eeb55-8493-4977-bc73-8d9a07d5c149)
![Captura de Pantalla 2024-08-24 a la(s) 22 18 36](https://github.com/user-attachments/assets/bc59cdf7-bd04-4006-af2b-bed8ff19039f)





