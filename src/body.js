import { Element } from "./element";

/**
 * The body element.
 */
export class Body extends Element {

    constructor() {
        super();
        this.elem = document.body;
    }
}