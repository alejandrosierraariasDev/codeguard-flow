const mi_contrasena = '123'; // Esto debería fallar

const saludar = (nombre: string) => {
    // Un comentario de código que queremos detectar
    // console.log("Hola");
    console.log(`Hola, ${nombre}`);
};

const prueba = "Esto es una prueba"; // Esto se arreglará con lint-staged

saludar('Alex');