import { Item } from "./item_cardapio.js";

class Cardapio {
    constructor() {
        this.items = [new Item('cafe', "Café", 3.00, false),
        new Item('chantily','Chantily (extra do Café)', 1.50, true),
        new Item('suco', 'Suco Natural', 6.20, false),
        new Item('sanduiche', 'Sanduíche', 6.50, false),
        new Item('queijo', 'Queijo (extra do Sanduíche)', 2.00, true),
        new Item('salgado', 'Salgado', 7.25, false),
        new Item('combo1', '1 Suco e 1 Sanduíche', 9.50, false),
        new Item('combo2', '1 Café e 1 Sanduíche', 7.50, false)
        ]
    }

    getPrice(code) {
        return this.items.find(item => item.code === code).price
    }

    isExtra(code) {
        return this.items.find(item => item.code === code).isExtra
    }
}

export {Cardapio}