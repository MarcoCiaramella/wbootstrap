import { Element } from "./element";

export class Switch extends Element {

    constructor(text, checked, onClick) {
        super("div");
        this.addClasses("form-check", "form-switch");
        const input = new Element("input");
        input.addClasses("form-check-input");
        input.elem.type = "checkbox";
        input.elem.role = "switch";
        input.elem.checked = checked;
        input.onClick(onClick);
        const label = new Element("label");
        label.addClasses("form-check-label");
        label.elem.for = input.id;
        label.innerText = text;
        this.appendChild(input);
        this.appendChild(label);
    }
}