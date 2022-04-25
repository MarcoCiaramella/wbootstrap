import { Element } from "./element";

export class Label extends Element {

    constructor(text, elem) {
        super("label");
        this.innerHTML = text;
        this.appendChild(elem);
    }

}