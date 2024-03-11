# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10. 

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10. <----- RESPOSTA

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota"); <----- RESPOSTA

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18 <----- RESPOSTA

B) 16

C) 14 

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG) <----- RESPOSTA

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG) <----- RESPOSTA

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria." <----- RESPOSTA

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```javascript

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

```

______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```javascript

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

```

______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

```javascript

// Criação da classe. Toda classe tem incluída por padrão um constructor, que pode ser vazio. Nesse caso, também irei configurá-lo manualmente:
class SomadorDeNotas {
  constructor() {

    // Declaração do atributo total, que inicialmente começa em 0
    this.total = 0;
  }

  // método que recebe um parâmetro nota, que é incrementada do total conforme sua adição
  adicionarNota(nota) {
   this.total += nota; // incremento e atualização do valor de total
  }

  // método que printa o valor de total
  verTotal() {
    console.log("Total de notas: " + this.total);
  }
}

// Criação de um novo objeto de SomadorDeNotas
const somador = new SomadorDeNotas();

// atribuição de novas notas
somador.adicionarNota(8.2);
somador.adicionarNota(9);
somador.adicionarNota(9.8)

// printa o valor total após a adição de todas as notas
somador.verTotal();

```

______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

```javascript

// Criação da classe. Toda classe tem incluída por padrão um constructor, que pode ser vazio. Nesse caso, também irei configurá-lo manualmente:
class Funcionario {
  constructor(nome, idade, salarioBase, cargaHoraria) { 
    
    // Declaração dos atributos de Funcionario
    this.nome = nome;
    this.idade = idade;
    this.salarioBase = salarioBase; // minha interpretação é que o salárioBase é o valor da hora. por isso, vou utilizá-lo para o cálculo do salário
    this.cargaHoraria = cargaHoraria; // no geral, cada funcionário terá sua carga horária que será utilizada para calcular seu salário final, então decidi colocar como atributo da classe-pai

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
  constructor(nome, idade, salarioBase, cargaHoraria, disciplina) { // Dentro do constructor de uma classe-filho, tem que haver os métodos existentes já na classe-pai e o outro atributo "disciplina" a ser adicionado

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
console.log(professor1.calcularSalario()); // exibição no console do cálculo do salário
const professor2 = new Professor("Jefersson", 34, 25, 15, "Educação Física");
console.log(professor2.calcularSalario()); // exibição no console do cálculo do salário

```