import { Element } from "./element";
import { Label } from "./label";
import { Input } from "./input";
import { SimpleButton } from "./button";
import { Textarea } from "./textarea";
import { Div } from "./div";
import { Select } from "./select";

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
class FormItem extends Element {

    #row;
    #item;
    #customValidation;
    #invalid;
    #itemDiv;

    /**
     * 
     * @param {string} label 
     * @param {Element} item 
     */
    constructor(label, item) {
        super("div");
        this.#item = item;
        this.#itemDiv = new Div()
            .addClasses("col-8")
            .appendChild(this.#item);
        this.#row = new Div()
            .addClasses("row", "g-3", "align-items-center")
            .appendChild(new Div()
                .addClasses("col-4")
                .appendChild(new Label(label).addClasses("col-form-label")))
            .appendChild(this.#itemDiv);
        this.appendChild(this.#row);
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
                this.#itemDiv.appendChild(this.#invalid);
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
     * @returns {FormItem} this
     */
    readOnly() {
        this.#item.readOnly();
        return this;
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
     */
    constructor(label, type, placeholder) {
        super(label, new Input(type, placeholder).addClasses("form-control"));
    }
}

/**
 * Form textarea element.
 */
export class FormTextarea extends FormItem {

    /**
     * 
     * @param {string} label as HTML code
     * @param {string} placeholder 
     */
    constructor(label, placeholder) {
        super(label, new Textarea(placeholder, null, null).addClasses("form-control"));
    }
}

/**
 * Form select element.
 */
export class FormSelect extends FormItem {

    /**
     * 
     * @param {string} label as HTML code
     * @param {string[]} options 
     */
    constructor(label, options) {
        super(label, new Select(options));
    }

    /**
     * Binds a function called on change event.
     * @param {function} fun 
     * @returns {FormSelect} this
     */
    onChange(fun) {
        this.item.onChange(fun);
        return this;
    }
}

/**
 * Form element.
 */
export class Form extends Element {

    #items;
    #submitButton;
    #cancelButton;

    /**
     * 
     * @param {...FormItem} formItems 
     */
    constructor(...formItems) {
        super("form");
        this.#items = [];
        for (const formItem of formItems) {
            this.#items.push(formItem);
            this.appendChild(formItem);
        }
        this.elem.oninput = event => this.enableSubmit();
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
     * @param {string} buttonContent submit button inner text
     * @param {function} fun 
     * @returns {Form} this
     */
    onSubmit(buttonContent, fun) {
        this.#submitButton = new SimpleButton("submit", null, buttonContent)
            .asPrimary()
            .disable()
            .addClasses("m-1");
        this.appendChild(this.#submitButton);
        this.elem.addEventListener('submit', async event => {
            this.disableSubmit();
            const oldInnerHTML = this.#submitButton.runSpinner();
            event.preventDefault();
            event.stopPropagation();
            this.#items.forEach(item => item.clear().validate());
            this.addClasses('was-validated');
            if (this.elem.checkValidity()) {
                await fun(this);
            }
            else {
                this.enableSubmit();
            }
            this.#submitButton.innerHTML = oldInnerHTML;
        }, false);
        return this;
    }

    /**
     * Binds a function for the cancel event.
     * @param {string} buttonContent cancel button inner text
     * @param {function} fun 
     * @returns {Form} this
     */
    onCancel(buttonContent, fun) {
        this.appendChild(new SimpleButton("button", null, buttonContent)
            .asDanger()
            .enable()
            .addClasses("m-1")
            .onClick(button => fun(this)));
        return this;
    }

    /**
     * Disables form submission.
     * @returns {Form} this
     */
    disableSubmit() {
        this.#submitButton && this.#submitButton.disable();
        return this;
    }

    /**
     * Enables form submission.
     * @returns {Form} this
     */
    enableSubmit() {
        this.#submitButton && this.#submitButton.enable();
        return this;
    }

    /**
     * Disables cancel button.
     * @returns {Form} this
     */
    disableCancel() {
        this.#cancelButton && this.#cancelButton.disable();
        return this;
    }

    /**
     * Enables cancel button.
     * @returns {Form} this
     */
    enableCancel() {
        this.#cancelButton && this.#cancelButton.enable();
        return this;
    }

    /**
     * Sets as read-only.
     * @returns {Form} this
     */
    readOnly() {
        for (const item of this.#items) {
            item.readOnly();
        }
        return this;
    }
}
