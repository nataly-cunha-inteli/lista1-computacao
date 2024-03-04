class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    return `Olá! Esse é o ${this.nome}, com ${this.idade} anos de idade!`;
  }
}

const cachorro = new Animal("Jubileu", 7);
const gato = new Animal("Simba", 4);

console.log(cachorro.descrever() + " " + gato.descrever());