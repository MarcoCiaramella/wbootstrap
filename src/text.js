import { Element } from "./element";

/**
 * Text element.
 */
export class Text extends Element {

    /**
     * 
     * @param {string} type one of HTML text element type
     * @param {string} innerHTML 
     */
    constructor(type, innerHTML) {
        // TODO add check on type
        super(type);
        this.innerHTML = innerHTML;
    }
}