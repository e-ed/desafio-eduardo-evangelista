import { Cardapio } from "./cardapio.js";
class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }
    const cardapio = new Cardapio();

    let arrayItens = [];

    for (let i = 0; i < itens.length; i++) {
      arrayItens.push(itens[i].split(",")[0]);
    }

    if (!this.validaCompra(arrayItens, cardapio)) {
      return "Item extra não pode ser pedido sem o principal";
    }

    let valorCompra = 0;
    for (const item of itens) {
      let [nome, quantidade] = item.split(",");
      if (quantidade == 0) {
        return "Quantidade inválida!";
      }
      quantidade = parseInt(quantidade);
      let preco = 0;
      try {
        preco = cardapio.getPrice(nome);
      } catch (TypeError) {
        return "Item inválido!";
      }
      valorCompra += preco * quantidade;
    }

    switch (metodoDePagamento) {
      case "dinheiro":
        valorCompra = (valorCompra * 0.95).toFixed(2);
        break;
      case "credito":
        valorCompra = (valorCompra * 1.03).toFixed(2);
        break;
      case "debito":
        valorCompra = valorCompra.toFixed(2);
        break;
      default:
        return "Forma de pagamento inválida!";
    }

    return "R$ " + valorCompra.replace(".", ",");
  }

  validaCompra(arrayItens, cardapio) {
    for (let i = 0; i < arrayItens.length; i++) {
      try {
        if (cardapio.isExtra(arrayItens[i])) {
          switch (arrayItens[i]) {
            case "queijo":
              if (!arrayItens.includes("sanduiche")) {
                return false;
              }
              break;
            case "chantily":
              if (!arrayItens.includes("cafe")) {
                return false;
              }
              break;
          }
        }
      } catch (TypeError) {
        return "Item inválido!";
      }
    }
    return true;
  }
}

export { CaixaDaLanchonete };
