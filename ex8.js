class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    return `Olá! Esse é o ${this.nome}, com ${this.idade} anos de idade!`;
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor){
    super(nome, idade); // aqui recupera o constructor de Animal
    this.cor = cor;
  }

  descrever() {
    // Chama o método descrever() da classe pai usando super.descrever()
    return `Olá! Este é o ${this.nome}, com ${this.idade} anos de idade e cor ${this.cor}!`;
  }

  miar() {
    return`Miauuuuuu`
  }
}

const cachorro = new Animal("Jubileu", 7);
const gato = new Gato("Simba", 4, "Siamês");

console.log(cachorro.descrever());
console.log(gato.descrever());
console.log(gato.miar());