import { Element } from "./element";

export class Text extends Element {

    constructor(type, innerHTML) {
        super(type);
        this.innerHTML = innerHTML;
    }
}