import { Element } from "./element";

/**
 * Textarea element.
 */
export class Textarea extends Element {

    /**
     * 
     * @param {string} placeholder 
     * @param {string | number} minLength min number of characters
     * @param {string | number} maxLength max number of characters
     */
    constructor(placeholder, minLength, maxLength) {
        super("textarea");
        this.elem.placeholder = placeholder ? placeholder : "";
        if (minLength) this.elem.minLength = minLength;
        if (maxLength) this.elem.maxLength = maxLength;
    }

    /**
     * Gets value.
     */
    get value() {
        return this.elem.value;
    }

    /**
     * Sets value.
     */
    set value(val) {
        this.elem.value = val;
    }

    /**
     * Sets as read-only.
     * @returns {Textarea} this
     */
    readOnly() {
        this.elem.readOnly = true;
        this.addClasses("form-control-plaintext");
        return this;
    }

    /**
     * Binds a function called on input event.
     * @param {function} fun 
     * @returns {Textarea} this
     */
    onInput(fun) {
        this.elem.oninput = event => fun(event);
        return this;
    }

    /**
     * Binds a function called on change event.
     * @param {function} fun 
     * @returns {Textarea} this
     */
    onChange(fun) {
        this.elem.onchange = event => fun(event);
        return this;
    }
}