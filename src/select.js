import { Element } from "./element";

/**
 * Select element.
 */
export class Select extends Element {

    /**
     * 
     * @param {string[]} options
     */
    constructor(options) {
        super("select");
        this.addClasses("form-select");
        options.forEach(option => this.innerHTML += `<option value="${option}">${option}</option>`);
    }

    /**
     * Binds a function called on change event.
     * @param {function} fun 
     * @returns {Select} this
     */
    onChange(fun) {
        this.elem.onchange = event => fun(event);
        return this;
    }

    /**
     * Gets current value.
     */
    get value() {
        return this.elem.value.trim();
    }

    /**
     * Sets value.
     */
    set value(val) {
        this.elem.value = val;
    }
}