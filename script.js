function constructorPersona(nombre,edad,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
}

function ordenarArray(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j].edad < array[i].edad) {
          temp = array[j].edad;
          array[j].edad = array[i].edad;
          array[i].edad = temp;
        }
      }
    }
    return array;
}

const persona1 = new constructorPersona('Juan', 18, 172);
const persona2 = new constructorPersona('Nicolas', 13, 157);
const persona3 = new constructorPersona('Martin', 21, 184);
const persona4 = new constructorPersona('Lucas', 15, 173);

const personas = [persona1,persona2,persona3,persona4];
const personasOrdenadas = ordenarArray(personas);

console.log(personasOrdenadas);

