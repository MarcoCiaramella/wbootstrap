import { Element } from "./element";

/**
 * Input element.
 */
export class Input extends Element {

    /**
     * 
     * @param {string} type one of HTML input type
     * @param {string} placeholder 
     * @param {string | number} minLength min number of characters
     * @param {string | number} maxLength max number of characters
     */
    constructor(type, placeholder, minLength, maxLength) {
        super("input");
        this.elem.type = type;
        if (placeholder) this.elem.placeholder = placeholder;
        if (minLength) this.elem.minLength = minLength;
        if (maxLength) this.elem.maxLength = maxLength;
    }

    /**
     * Sets as read-only.
     * @returns {Input} this
     */
    disable() {
        this.elem.readOnly = true;
        this.removeClasses("form-control");
        this.addClasses("form-control-plaintext");
        return this;
    }

    /**
     * Sets as editable field.
     * @returns {Input} this
     */
    enable() {
        this.elem.readOnly = false;
        this.removeClasses("form-control-plaintext");
        this.addClasses("form-control");
        return this;
    }

    /**
     * Gets input value.
     */
    get value() {
        return this.elem.value.trim();
    }

    /**
     * Sets input value.
     */
    set value(val) {
        this.elem.value = val;
    }

    /**
     * Binds a function called on change event.
     * @param {function} fun 
     * @returns {Input} this
     */
    onChange(fun) {
        this.elem.onchange = event => fun(event);
        return this;
    }

    /**
     * Binds a function called on input event.
     * @param {function} fun 
     * @returns {Input} this
     */
    onInput(fun) {
        this.elem.oninput = event => fun(event);
        return this;
    }

    /**
     * Binds a function called when key "Enter" is pressed.
     * @param {function} fun 
     * @returns {Input} this
     */
    onEnter(fun) {
        this.elem.onkeyup = event => { if (event.key === "Enter") fun(this); };
        return this;
    }
}