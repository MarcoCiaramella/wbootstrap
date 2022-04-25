import { Element } from "./element";

/**
 * The body element.
 */
export class Body extends Element {

    /**
     * Creates a body element and assigns it to document.body.
     */
    constructor() {
        super("BODY");
        document.body = this.elem;
    }
}