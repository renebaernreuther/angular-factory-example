import {PizzaFactory} from './pizza-factory';
import {Pizza} from '../pizza/pizza';
import {WagnerPizza} from '../pizza/wagner-pizza';
import {BierPizza} from '../pizza/bier-pizza';

export class BayreutherPizzaStore extends PizzaFactory {

    prepare(type: string): Pizza {
        if (type === 'wagner') {
            return new WagnerPizza();
        } else if (type === 'bier') {
            return new BierPizza();
        }
        throw new DOMException('Pizzatyp exisiert nicht');
    }

}
