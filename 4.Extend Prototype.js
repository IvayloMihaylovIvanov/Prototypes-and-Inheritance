function attachSpeciesAndToString(cls) {
    cls.prototype.species = "Human";
    cls.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}



// class ExampleClass {
//     constructor(name) {
//         this.name = name;
//     }

//     toString() {
//         return `My name is ${this.name}`;
//     }
// }

attachSpeciesAndToString();

const exampleInstance = new ExampleClass("John Doe");
console.log(exampleInstance.toSpeciesString());
