import {PizzaFactory} from './pizza-factory';
import {Pizza} from '../pizza/pizza';

export class KulmbacherPizzaStore extends PizzaFactory {
    // TODO: Implementiere ich für den Typen 'bier' sowie 'salami'. Erweiter mich zusätzlich um einen neuen Typen
    prepare(type: string): Pizza {
        throw new DOMException('Implementiere mich');
    }

}
