import { Element } from "./element";

export class Span extends Element {

    /**
     * A span element.
     * @param {string} text span content
     * @param {number} fontSize from 1 to 6 or null
     */
    constructor(text, fontSize) {
        super("span");
        this.elem.style.fontWeight = "bold";
        this.elem.innerText = text;
        fontSize && this.addClasses(`fs-${fontSize}`);
    }
}