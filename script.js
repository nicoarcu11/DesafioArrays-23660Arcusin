alert("Bienvenid@ a Panchos Arcu!");
var pan = 0;
var panName = "";
var salchicha = 0;
var salchichaName = "";
var toppings = 10;
var toppingsList = "";
var salsas = 10;
var salsasList = "";
var i = 0;
var total = 0;
var seguir = true;

while (seguir == true) {
    pan = parseInt(prompt("¿Que pan quiere para su pancho? (Escriba el numero porfavor) 1 Pan integral($70) 2 Pan de papa($80) 3 Pan clasico($60)"));
    switch (pan) {
        case 1:
            panName = "integral"
            total += 70;
            seguir = false;
            break;
        
        case 2:
            panName = "de papa"
            total += 80;
            seguir = false;
            break;

        case 3:
            panName = "clasico"
            total += 60;
            seguir = false;
            break;
        
        default:
            seguir = true;
            console.log("lol");
    }
}

seguir = true;

while(seguir == true){
    salchicha = parseInt(prompt("¿Que salchicha quiere para su pancho? (Escriba el numero porfavor) 1 Viena($60) 2 Alemana($80) 3 De carne vacuna(Kosher)($100)"));
    switch (salchicha) {
        case 1:
            salchichaName = "viena"
            total += 60;
            seguir = false;
            break;
        
        case 2:
            salchichaName = "alemana"
            total += 80;
            seguir = false;
            break;

        case 3:
            salchichaName = "vacuna"
            total += 100;
            seguir = false;
            break;
        
        default:
            seguir = true;
    }
}
    
while(toppings!=0){
    i++;
    toppings = parseInt(prompt("¿Que topping Nro."+i+" quiere para su pancho? (Escriba el numero porfavor) 0 Ninguno 1 Bacon($60) 2 Carne($50) 3 Papas pay($20) 4 Jalapeños($20) 5 Palta($100)"));
    if (i>1 && toppings!=0 &&toppings>-1&&toppings<6) {
        toppingsList +=", ";
    }
    switch (toppings) {
        case 0:
            break;

        case 1:
            toppingsList += "bacon"
            total += 60;
            break;
        
        case 2:
            toppingsList += "carne"
            total += 50;
            break;
    
        case 3:
            toppingsList += "papas pay"
            total += 20;
            break;

        case 4:
            toppingsList += "jalapeños"
            total += 20;
            break;    
        
        case 5:
            toppingsList += "palta"
            total += 100;
            break;    
    }
    
}
i=0;
while(salsas!=0){
    i++;
    salsas = parseInt(prompt("¿Que salsa Nro."+i+" quiere para su pancho? (Escriba el numero porfavor) 0 Ninguno 1 Ketchup($0) 2 Barbacoa($10) 3 Mostaza($0) 4 Mayonesa($0) 5 Cheddar($70) 6 Salsa Golf($0) 7 Chili($100) 8 Chucrut($30)"));
    if (toppingsList!="" && salsas!=0 &&salsas>-1&&salsas<9) {
        salsasList +=", ";
    }
    switch (salsas) {
        case 0:
            break;

        case 1:
            salsasList += "ketchup"
            total += 0;
            break;
        
        case 2:
            salsasList += "barbacoa"
            total += 10;
            break;
    
        case 3:
            salsasList += "mostaza"
            total += 0;
            break;

        case 4:
            salsasList += "mayonesa"
            total += 0;
            break;    
        
        case 5:
            salsasList += "cheddar"
            total += 70;
            break;   

        case 6:
            salsasList += "salsa golf"
            total += 0;
            break; 
        
        case 7:
            salsasList += "chili"
            total += 100;
            break; 

        case 8:
            salsasList += "chucrut"
            total += 30;
            break; 
    }
}
alert("Usted pidió un pancho con pan "+panName+", salchicha "+ salchichaName+", con " +toppingsList+salsasList+" por un total de "+total);
alert("Muchas gracias por su compra, vuelva pronto!");