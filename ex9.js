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