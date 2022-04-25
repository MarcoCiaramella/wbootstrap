import { Element } from "./element";

export class Input extends Element {

    constructor(type, placeholder, minLength, maxLength, required) {
        super("input");
        this.elem.type = type;
        this.elem.placeholder = placeholder ? placeholder : "";
        this.elem.required = required;
        if (minLength) this.elem.minLength = minLength;
        if (maxLength) this.elem.maxLength = maxLength;
    }

    readOnly() {
        this.elem.readOnly = true;
        this.addClasses("form-control-plaintext");
        return this;
    }

    get value() {
        return this.elem.value.trim();
    }

    set value(val) {
        this.elem.value = val;
    }
}