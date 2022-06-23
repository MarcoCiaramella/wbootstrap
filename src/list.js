import { Element } from "./element";

/**
 * Unsorted list element.
 */
export class UList extends Element {

    /**
     * 
     * @param {string[]} classes 
     */
    constructor(classes) {
        super("ul");
        this.addClasses(classes);
    }

    /**
     * Adds a list entry.
     * @param {string} text 
     * @param {string} href 
     * @param {string[]} classes 
     * @returns 
     */
    addItem(text, href, classes) {
        this.elem.innerHTML += `<li><a class="${classes}" href="${href}">${text}</a></li>`;
        return this;
    }
}