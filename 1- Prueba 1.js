const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log(
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
}

// Solo con if

// const tipoDeSuscripcion = "Basic";

// if (tipoDeSuscripcion === "Free") {
//     console.log("Solo puedes tomar los cursos gratis");
// }

// if (tipoDeSuscripcion === "Basic") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }

// if (tipoDeSuscripcion === "Expert") {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }

// if (
//     tipoDeSuscripcion !== "Free" &&
//     tipoDeSuscripcion !== "Basic" &&
//     tipoDeSuscripcion !== "Expert"
// ) {
//     console.log(
//         "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//     );
// };
