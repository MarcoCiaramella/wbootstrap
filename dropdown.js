import { Element } from "./element";
import { List } from "./list";

/**
 * Dropdown element.
 */
export class Dropdown extends Element {

    #menu;
    #wrappedElem;

    /**
     * 
     * @param {Element} elem 
     */
    constructor(elem) {
        super("div");
        this.addClasses("dropdown");
        this.#wrappedElem = elem;
        this.#wrappedElem.elem.setAttribute("data-bs-toggle", "dropdown");
        this.#wrappedElem.elem.setAttribute("aria-expanded", "false");
        this.#menu = new List("dropdown-menu");
        this.elem.setAttribute("aria-labelledby", this.#wrappedElem.id);
        this.appendChild(this.#wrappedElem).appendChild(this.#menu);
    }

    /**
     * Adds the toggle icon.
     * @returns this
     */
    addToggle() {
        this.#wrappedElem.addClasses("dropdown-toggle");
        return this;
    }

    /**
     * Adds a dropdown item.
     * @param {string} text 
     * @param {string} href 
     * @returns this
     */
    addItem(text, href) {
        this.#menu.addItem(text, href, "dropdown-item");
        return this;
    }
}