import { Element } from "./element";
import { Input } from "./input";
import { SimpleButton } from "./button";

export class Search extends Element {

    constructor(placeholder) {
        super("form");
        this.addClasses("d-flex");
        const input = new Input("search", placeholder).addClasses("form-control");
        input.elem.ariaLabel = "Search";
        const button = new SimpleButton("submit", null, "Search").addClasses("btn-outline-success");
        this.appendChild(input).appendChild(button);
    }
}