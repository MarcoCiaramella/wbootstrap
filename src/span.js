import { Element } from "./element";

/**
 * Span element.
 */
export class Span extends Element {

    /**
     * 
     * @param {string} innerHTML span content
     */
    constructor(innerHTML) {
        super("span");
        this.elem.innerHTML = innerHTML;
    }
}