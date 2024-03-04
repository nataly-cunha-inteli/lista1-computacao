// Criação da classe. Toda classe tem incluída por padrão um constructor, que pode ser vazio. Nesse caso, também irei configurá-lo manualmente:
class Funcionario {
  constructor(nome, idade, salarioBase, cargaHoraria) { 
    
    // Declaração dos atributos de Funcionario
    this.nome = nome;
    this.idade = idade;
    this.salarioBase = salarioBase;
    this.cargaHoraria = cargaHoraria;

    // Atributo salário que recebe o valor calculado dentro do método calcularSalario
    this.salario = this.calcularSalario();
  }

  // Método que faz uma multiplicação entre a carga horária e o salario-base (valor da hora)
  calcularSalario() {
    return this.cargaHoraria * this.salarioBase;

  }
}

// Criação de uma classe que estende a partir de outra (Funcionário)
class Professor extends Funcionario {
  constructor(nome, idade, salarioBase, cargaHoraria, disciplina) { // Dentro do constructor de uma classe-filho, tem que haver os métodos existentes já na classe-pai e os outros atributos a serem adicionados

    // Recuperação dos atributos da classe-pai utilizando o "super()"
    super(nome, idade, salarioBase, cargaHoraria);

    // Declaração da novo atributo
    this.disciplina = disciplina;
  }

  // método que recupera o método da classe-pai
  calcularSalario() {
    return super.calcularSalario();
  }
  
}

// Criação de dois objetos da classe Professor (professor1 e professor2). É possível declarar um novo objeto de Funcionario também. Os valores de entrada devem ser coerentes com a ordem dos parâmetros dos constructors
const professor1 = new Professor("Márcia", 56, 30, 20, "Matemática");
console.log(professor1.calcularSalario()); // print do cálculo do salário
const professor2 = new Professor("Jefersson", 34, 25, 15, "Educação Física");
console.log(professor2.calcularSalario()); // print do cálculo do salário
