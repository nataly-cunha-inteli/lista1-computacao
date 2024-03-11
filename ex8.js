// Criação da classe. Toda classe tem incluída por padrão um constructor, que pode ser vazio. Nesse caso, também irei configurá-lo manualmente:
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

// Criação de uma classe que estende a partir de outra (Animal)
class Gato extends Animal {
  constructor(nome, idade, cor) { // Dentro do constructor de uma classe-filho, tem que haver os métodos existentes já na classe-pai e os outros atributos a serem adicionados
    super(nome, idade); // aqui recupera o constructor de Animal
    this.cor = cor; // aqui cria-se um atributo extra
  }

  descrever() {
    // Quando esse método for chamado, irá retornar uma mensagem contendo também um parâmetro nome, idade e cor do gato.
    console.log("Olá! Este é o " + this.nome + ", com " + this.idade + " anos de idade e cor " + this.cor + "!");
  }

  // Apenas um método para a entrega de uma mensagem no console, que será o som do gato
  miar() {
    console.log("Miauuuuuu");
  }
}

// Criação de um novo objeto de Animal, cachorro, e um novo objeto de Gato, chamado gato. Os valores de entrada devem ser coerentes com a ordem dos parâmetros dos constructors
const cachorro = new Animal("Jubileu", 7);
const gato = new Gato("Simba", 4, "Siamês");

// Print do método descrever para cada animal, e print do método miar para o gato
cachorro.descrever();
gato.descrever();
gato.miar();