import { Element } from "./element";
import { Label } from "./label";
import { Input } from "./input";
import { SimpleButton } from "./button";
import { Textarea } from "./textarea";

class Feedback extends Element {

    constructor(msg) {
        super("div");
        this.elem.innerText = msg;
    }
}

class Valid extends Feedback {

    constructor(msg) {
        super(msg);
        this.addClasses("valid-feedback");

    }
}

class Invalid extends Feedback {

    constructor(msg) {
        super(msg);
        this.addClasses("invalid-feedback");
    }
}

/**
 * Form item element.
 */
export class FormItem extends Element {

    #item;
    #customValidation;
    #invalid;

    /**
     * 
     * @param {string} label 
     * @param {number} marginBottom 
     */
    constructor(label, marginBottom) {
        super("div");
        this.addClasses(`mb-${marginBottom}`);
        this.appendChild(new Label(label).addClasses("form-label"));
        this.#item = null;
        this.#customValidation = null;
        this.#invalid = null;
    }

    set customValidation(fun) {
        this.#customValidation = fun;
    }

    validate() {
        if (this.#customValidation) {
            const message = this.#customValidation(this.value);
            this.#item.elem.setCustomValidity(message ? message : "");
            if (message) {
                this.#invalid = new Invalid(message);
                this.appendChild(this.#invalid);
            }
        }
        else {
            this.#item.elem.setCustomValidity("");
        }
    }

    clear() {
        if (this.#invalid) {
            this.#invalid.remove();
            this.#invalid = null;
        }
        return this;
    }

    /**
     * Gets custom validation.
     */
    get customValidation() {
        return this.#customValidation;
    }

    /**
     * Sets item.
     */
    set item(item) {
        this.#item = item;
    }

    /**
     * Gets item.
     */
    get item() {
        return this.#item;
    }

    /**
     * Gets value.
     */
    get value() {
        return this.#item.value;
    }

    /**
     * Sets value.
     */
    set value(val) {
        this.#item.value = val;
    }

    /**
     * Sets as read-only.
     */
    readOnly() {
        this.#item.readOnly();
    }
}

/**
 * Form input element.
 */
export class FormInput extends FormItem {

    /**
     * 
     * @param {string} label as HTML code
     * @param {string} type one of supported HTML input type
     * @param {string} placeholder 
     * @param {boolean} required required true/false
     * @param {number} marginBottom 
     */
    constructor(label, type, placeholder, required, marginBottom) {
        super(label, marginBottom);
        const input = new Input(type, placeholder, null, null, required).addClasses("form-control");
        this.item = input;
        this.appendChild(input);
    }
}

/**
 * Form text ares element.
 */
export class FormTextarea extends FormItem {

    /**
     * 
     * @param {string} label as HTML code
     * @param {string} placeholder 
     * @param {boolean} required required true/false
     * @param {number} marginBottom 
     */
    constructor(label, placeholder, required, marginBottom) {
        super(label, marginBottom);
        const textarea = new Textarea(placeholder, null, null, required).addClasses("form-control");
        this.item = textarea;
        this.appendChild(textarea);
    }
}

/**
 * Form element.
 */
export class Form extends Element {

    #items;
    #button;

    /**
     * 
     * @param {string} submitButtonContent submit button inner text
     * @param  {...FormItem} items 
     */
    constructor(submitButtonContent, ...items) {
        super("form");
        this.#items = [];
        items.forEach(item => {
            this.#items.push(item);
            this.appendChild(item);
        });
        this.#button = new SimpleButton("submit", null, submitButtonContent).addClasses("btn-primary");
        this.appendChild(this.#button);
        this.elem.noValidate = true;
        this.addClasses("needs-validation");
    }

    /**
     * Gets items.
     */
    get items() {
        return this.#items;
    }

    /**
     * Binds a function for the submit event.
     * @param {function} fun 
     * @returns this
     */
    onSubmit(fun) {
        this.elem.addEventListener('submit', async event => {
            this.#button.disable();
            const oldInnerHTML = this.#button.runSpinner();
            event.preventDefault();
            event.stopPropagation();
            this.#items.forEach(item => item.clear().validate());
            this.addClasses('was-validated');
            await fun(this.elem.checkValidity());
            this.#button.innerHTML = oldInnerHTML;
            this.#button.enable();
        }, false);
        return this;
    }
}
