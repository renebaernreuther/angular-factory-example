import {Pizza} from './pizza';

export class BierPizza extends Pizza {
    getLabel(): string {
        return 'Bayreuther Bier Pizza';
    }
}
