

let user_name = prompt ("Bienvenido guerrero, dime tu nombre.");


function raza (){

    let user_race = prompt("Hola " + user_name + " Ingresa tu raza, guerrero. Recuerda, esta página está personalizada si eres Sayayin, Humano, Androide, Mutante, Shin-Jin, Angel o Hakai-Shin");

    if (user_race === "Sayayin") {
        document.body.style.backgroundColor = "black";
        console.log(user_race);
        document.write("Genial, un sayayin.");
    } else if (user_race === "Humano") {
        document.body.style.backgroundColor = "green";
        document.write("Genial, un Humano.");
    } else if (user_race === "Androide") {
        document.body.style.backgroundColor = "blue";
        document.write("Genial, un Androide.");
    } else if (user_race === "Mutante") {
        document.body.style.backgroundColor = "purple";
        document.write("Genial, un Mutante.");
    } else if (user_race === "Shin-Jin") {
        document.body.style.backgroundColor = "orange";
        document.write("Ohhh, un kaio.");
    } else if (user_race === "Angel") {
        document.body.style.backgroundColor = "white";
        document.write("Madre mía, un Angel.");
    } else if (user_race === "Hakai-Shin") {
        document.body.style.backgroundColor = "red";
        document.write("Mi señor, un Dios.");
    } 
   
}
function poder(){
    let user_power = prompt("Ingrese su nivel de poder máximo");

  if (user_power<1000){
       
        alert('Insecto!! No aceptamos debiluchos! Hasta Yamcha te hubiera derrotado!! Entrena y vuelve cuando tengas un nivel de poder más alto >.>');
        poder();
   } else if (user_power>1000){
    document.write("Disfruta tu estancia " + user_name +" , aunque seas un guerrero de clase baja");
   } else if(user_power>10000){
    document.write("Disfruta tu estancia " + user_name +" , es tu recompensa por ser un guerrero de clase alta");
   } 
}


function krilin(){
    let user_krilin = prompt("Ingrese las veces que kirlin murio");
    while (user_krilin != 5){
        // user_krilin = parseInt(user_krilin);
        alert('Insecto!! No sabes nada de la serie!! >.>');
        user_krilin = prompt("te doy otra oportunidad");
    }
    alert('Muy bien papu, tu si sabes');
}

 function esferas(){
 let cantidad =prompt ("¿cuántas esferas te faltan recolectar?")
    cantidad=parseInt(cantidad);

    if (cantidad > 7) {
        alert("Si quieres más esferas tendrás que decirle a Dendé que te haga unas, yo solo te puedo dar 7 :v");
        esferas(); 
        return; 
    }
    for(i = 0; i < cantidad; i++){
        document.write(
            '<img src="imagenes/esfera.jpg" class="esfera-img">'
            );
    }
 }


