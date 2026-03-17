let autoPrincipal = {
    marca: "Toyota",
    modelo: "Corolla",
    ruedas: 4,

    arrancar: function () {
        console.log("El auto " + this.marca + " está arrancando");
    },

    frenar: function () {
        console.log("El auto " + this.marca + " está frenando");
    }
};

console.log("Antes:", autoPrincipal);

autoPrincipal.marca = "Honda";

console.log("Después:", autoPrincipal);

function Auto(marca, modelo, ruedas, year) {

    this.marca = marca;
    this.modelo = modelo;
    this.ruedas = ruedas;
    this.year = year;

    this.arrancar = function () {
        console.log("El auto " + this.marca + " está arrancando");
    };

    this.frenar = function () {
        console.log("El auto " + this.marca + " está frenando");
    };
}

let auto1 = new Auto("Toyota", "Corolla", 4, 2022);
let auto2 = new Auto("Honda", "Civic", 4, 2023);
let auto3 = new Auto("Ford", "Mustang", 4, 2021);

let autos = [auto1, auto2, auto3];

auto1.arrancar();
auto1.frenar();

auto2.arrancar();
auto2.frenar();

console.log(autos);
