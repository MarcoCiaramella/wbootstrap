import { Element } from "./element";

export class MaterialIcon extends Element {

    constructor(name) {
        super("span");
        this.addClasses("material-icons-outlined");
        this.elem.style.verticalAlign = "middle";
        this.elem.innerHTML = name;
    }
}