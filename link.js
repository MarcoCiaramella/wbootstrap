import { Element } from "./element";

/**
 * Link element.
 */
export class Link extends Element {

    /**
     * 
     * @param {string} url 
     * @param {string} text text shown
     * @param {boolean} newTab specifies if link opens in a new tab
     */
    constructor(url, text, newTab) {
        super("a");
        this.elem.href = url;
        this.elem.target = newTab ? "_blank" : "_self";
        this.innerText = text;
    }
}
