import { Element } from "./element";

/**
 * Text element.
 */
export class Text extends Element {

    /**
     * 
     * @param {string} type one of HTML text element type
     * @param {string} text content in HTML format
     */
    constructor(type, text) {
        // TODO add check on type
        super(type);
        this.innerHTML = text;
    }

    /**
     * Sets text.
     * @param {string} text content in HTML format
     * @returns {Text} this
     */
    setText(text) {
        this.innerHTML = text;
        return this;
    }


}