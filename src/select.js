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

    /**
     * Sets as read-only.
     * @returns {Select} this
     */
    disable() {
        this.elem.disabled = true;
        return this;
    }

    /**
     * Sets as editable field.
     * @returns {Select} this
     */
    enable() {
        this.elem.disabled = false;
        return this;
    }
}