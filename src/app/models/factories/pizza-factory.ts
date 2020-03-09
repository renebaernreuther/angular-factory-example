import {Pizza} from '../pizza/pizza';

export abstract class PizzaFactory {

    /**
     * Erzeugt eine Pizza.
     */
    public abstract prepare(type: string): Pizza;

}
