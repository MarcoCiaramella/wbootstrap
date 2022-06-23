import { Element } from "./element";

/**
 * Label element.
 */
export class Label extends Element {

    /**
     * 
     * @param {string} innerHTML 
     * @param {Element} child 
     */
    constructor(innerHTML, child) {
        super("label");
        this.innerHTML = innerHTML;
        this.appendChild(child);
    }

}