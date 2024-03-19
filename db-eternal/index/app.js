let user_name = prompt("Ingresa tu nombre de guerrero.");
let user_race = prompt("Ingresa tu raza, guerrero. Recuerda, esta página está personalizada si eres Sayayin, Humano, Androide, Mutante, Shin-Jin, Angel o Hakai-Shin");
let user_maxt = prompt("Ingrese su transformación mas fuerte");




document.write('Hola ' + user_name + ' representante de la raza ' + user_race + ', ostenta tu transformación ' + user_maxt + ' con orgullo.');

if (user_race === "Sayayin") {
    document.body.style.backgroundColor = "black";
} else if (user_race === "Humano") {
    document.body.style.backgroundColor = "green";
} else if (user_race === "Androide") {
    document.body.style.backgroundColor = "blue";
} else if (user_race === "Mutante") {
    document.body.style.backgroundColor = "purple";
} else if (user_race === "Shin-Jin") {
    document.body.style.backgroundColor = "orange";
} else if (user_race === "Angel") {
    document.body.style.backgroundColor = "white";
} else if (user_race === "Hakai-Shin") {
    document.body.style.backgroundColor = "red";
} 



