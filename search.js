import { Element } from "./element";
import { Input } from "./input";

export class Search extends Element {

    constructor(placeholder, borderRadius) {
        super("form");
        this.addClasses("d-flex");
        const input = new Input("search", placeholder).addClasses("form-control");
        input.elem.ariaLabel = "Search";
        input.elem.style.borderRadius = borderRadius;
        this.appendChild(input);
    }
}