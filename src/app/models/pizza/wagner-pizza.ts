import {Pizza} from './pizza';

export class WagnerPizza extends  Pizza {
    getLabel(): string {
        return 'Bayreuther Wagner Pizza';
    }
}
