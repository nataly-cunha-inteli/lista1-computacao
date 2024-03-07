// Criação da classe. Toda classe tem incluída por padrão um constructor, que pode ser vazio. Nesse caso, irei configurá-lo manualmente:
class Animal {
  constructor(nome, idade) {
    // Declaração dos atributos de Animal
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    // Quando esse método for chamado, irá exibir uma mensagem no console contendo também um parâmetro nome e idade do animal.
    console.log("Olá! Esse é o " + this.nome + ", com " + this.idade + " anos de idade!");
  }
}

// Criação de dois novos objetos de Animal, cachorro e gato. Os valores de entrada devem ser coerentes com a ordem dos parâmetros de constructor
const cachorro = new Animal("Jubileu", 7);
const gato = new Animal("Simba", 4);

// Printa as características de cachorro e gato a partir da execução do método descrever() para cada
cachorro.descrever();
gato.descrever();