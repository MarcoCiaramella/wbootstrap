import { Element } from "./element";

/**
 * Implements a Google Material Icon element.
 */
export class MaterialIcon extends Element {

    /**
     * 
     * @param {string} name Google Material Icon name
     * @param {string} color one of CSS supported format
     */
    constructor(name, color) {
        super("span");
        this.addClasses("material-icons-outlined");
        this.style.verticalAlign = "middle";
        this.elem.innerHTML = name;
        color && this.color(color);
    }
}