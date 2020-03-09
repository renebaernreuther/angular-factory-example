import {Component} from '@angular/core';
import {BayreutherPizzaStore} from './models/factories/bayreuther-pizza-store';
import {Pizza} from './models/pizza/pizza';
import {PizzaFactory} from './models/factories/pizza-factory';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pizza-factory';

    // TODO: Ersetze mich durch eine SimpleFactory, die auch den Kulmbacher PizzaStore erzeugt.
    bayreutherPizzaFactory: PizzaFactory = new BayreutherPizzaStore();

    orderedPizzas: Pizza[] = [];


    generateBayreuthPizza(type: string, pizzaFactory: PizzaFactory) {
        const pizza = pizzaFactory.prepare(type);
        this.orderedPizzas.push(pizza);
    }


}
