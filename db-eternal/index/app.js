
// function hola_name(){
//     return user_name;
// }
let user_name = prompt ("Bienvenido guerrero, dime tu nombre.");


function raza (){

    let user_race = prompt("Hola " + user_name + " Ingresa tu raza, guerrero. Recuerda, esta página está personalizada si eres Sayayin, Humano, Androide, Mutante, Shin-Jin, Angel o Hakai-Shin");

    if (user_race === "Sayayin") {
        document.body.style.backgroundColor = "black";
        console.log(user_race);
        document.write("Genial, un sayayin");
    } else if (user_race === "Humano") {
        document.body.style.backgroundColor = "green";
        document.write("Genial, un Humano");
    } else if (user_race === "Androide") {
        document.body.style.backgroundColor = "blue";
        document.write("Genial, un Androide");
    } else if (user_race === "Mutante") {
        document.body.style.backgroundColor = "purple";
        document.write("Genial, un Mutante");
    } else if (user_race === "Shin-Jin") {
        document.body.style.backgroundColor = "orange";
        document.write("Genial, un kaio");
    } else if (user_race === "Angel") {
        document.body.style.backgroundColor = "white";
        document.write("Genial, un Angel");
    } else if (user_race === "Hakai-Shin") {
        document.body.style.backgroundColor = "red";
        document.write("Genial, un Dios");
    } 
   
}

function poder(){
    let user_power = prompt("Ingrese su nivel de poder máximo");

    if (user_power<1000){
        
        alert('Insecto!! No aceptamos debiluchos! Entrena y vuelve cuando tengas un nivel de poder más alto >.>');
        poder();
   } else if (user_power>1000){
    document.write("Disfruta tu estancia guerrero de clase baja");
   } else if(user_power>10000){
    document.write("Disfruta tu estancia guerrero de clase alta");
   } 
}









