class Alumno {
    constructor(alumno,nota1,nota2,nota3) {
        this.alumno = alumno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.promedio = Math.round((this.nota1 + this.nota2 + this.nota3) / 3);
    }
}

const alumnos = [];
let alumno = prompt("Ingrese el nombre de un alumno o SALIR para terminar");

// Función que valida que se ingresó un nro del 1 al 10
function validarNota(nota) {

    while (isNaN(nota) || nota < 1 || nota == "" || nota > 10) {
        nota = parseFloat(prompt("Debe ingresar un número del 1 al 10. Por favor ingrese la nota nuevamente"));
    }
    return nota; 

}

// Función que valida que se ingresó algún texto y no es un número
function validarAlumno (alumno) {

    while (alumno == "" || !isNaN(alumno)) {
        alumno = prompt("Debe ingresar un nombre. Por favor ingrese el nombre nuevamente");
    }
    return alumno;
    
}

while (alumno != "SALIR") {
    
    const alumnoValidado = validarAlumno(alumno);

    // Pedidos de notas
    let nota = parseFloat(prompt("Ingrese la nota del primer trimestre"));
    const notaTrim1 = validarNota(nota);

    nota = parseFloat(prompt("Ingrese la nota del segundo trimestre"));
    const notaTrim2 = validarNota(nota);

    nota = parseFloat(prompt("Ingrese la nota del tercer trimestre"));
    const notaTrim3 = validarNota(nota);

    alumnos.push(new Alumno(alumnoValidado,notaTrim1,notaTrim2,notaTrim3));

    // Vuelve a pedir un alumno 
    alumno = prompt("Ingrese el nombre de otro alumno o SALIR para terminar");    

}

// Ordena a los alumnos que tienen mayor promedio al principio del array
alumnos.sort((a,b) => {
    if (a.promedio > b.promedio) {
        return -1;
    } else if (a.promedio < b.promedio) {
        return 1;
    } else { 
        return 0;
    }
})    

// Obtiene los mejores promedios
const promedioMaximo = alumnos[0].promedio;
const mejoresPromedios = alumnos.filter((al) => al.promedio === promedioMaximo);

// Guarda en un array solo los nombres de los mejores alumnos
const mejoresAlumnos = [];

for (const al of mejoresPromedios) {
    mejoresAlumnos.push(al.alumno);
}

// Muestra en consola a los alumnos con sus notas y promedios
console.log(alumnos);

// Muestra en un alert a los mejores alumnos
if (mejoresAlumnos.length === 1) {
    alert("El mejor alumno es: " + mejoresAlumnos[0]);
} else {
    alert("Los mejores alumnos son: " + mejoresAlumnos.join(" - "));
}