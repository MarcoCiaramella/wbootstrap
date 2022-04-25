import { Element } from "./element";

export class Textarea extends Element {

    constructor(placeholder, minLength, maxLength, required) {
        super("textarea");
        this.elem.placeholder = placeholder ? placeholder : "";
        this.elem.required = required;
        if (minLength) this.elem.minLength = minLength;
        if (maxLength) this.elem.maxLength = maxLength;
    }

    get value() {
        return this.elem.value;
    }

    set value(val) {
        this.elem.value = val;
    }

    readOnly() {
        this.elem.readOnly = true;
        this.addClasses("form-control-plaintext");
        return this;
    }
}