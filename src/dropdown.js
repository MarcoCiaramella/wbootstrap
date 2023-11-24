import { Element } from "./element";
import { Text } from "./text";

export class DropdownMenu extends Element {

    constructor() {
        super("ul");
        this.addClasses("dropdown-menu");
    }

    /**
     * Adds a dropdown item.
     * @param {string} text 
     * @param {string} href 
     * @returns {DropdownMenu} this
     */
    addItem(text, href) {
        this.innerHTML += `<li><a class="dropdown-item" href="${href}">${text}</a></li>`;
        return this;
    }

    /**
     * Adds a dropdown item.
     * @param {string} text 
     * @param {function} fun 
     * @returns {DropdownMenu} this
     */
    addItem(text, fun) {
        this.appendChild(new Element('li').appendChild(new Text('p', text).addClasses('dropdown-item').onClick(fun)));
        return this;
    }

    addSubmenu(text, menu) {
        const a = new Element("a").addClasses("dropdown-item", "dropdown-toggle");
        a.elem.setAttribute("data-bs-toggle", "dropdown");
        a.elem.setAttribute("aria-expanded", "false");
        a.innerText = text;
        menu.elem.setAttribute("aria-labelledby", a.id);
        this.innerHTML += `<li class="dropend">${a.outerHTML}${menu.outerHTML}</li>`;
        return this;
    }
}

/**
 * Dropdown element.
 */
export class Dropdown extends Element {

    #menu;
    #wrappedElem;

    /**
     * 
     * @param {Element} elem 
     * @param {DropdownMenu} menu
     */
    constructor(elem, menu) {
        super("div");
        this.addClasses("dropdown");
        this.#wrappedElem = elem;
        this.#wrappedElem.elem.setAttribute("data-bs-toggle", "dropdown");
        this.#wrappedElem.elem.setAttribute("aria-expanded", "false");
        this.#wrappedElem.elem.setAttribute("data-bs-auto-close", "outside");
        this.#menu = menu;
        this.#menu.elem.setAttribute("aria-labelledby", this.#wrappedElem.id);
        this.appendChild(this.#wrappedElem).appendChild(this.#menu);
    }

    /**
     * Adds the toggle icon.
     * @returns {Dropdown} this
     */
    addToggle() {
        this.#wrappedElem.addClasses("dropdown-toggle");
        return this;
    }
}