import { Element } from "./element";

export class List extends Element {

    constructor(classes) {
        super("ul");
        this.addClasses(classes);
    }

    addItem(text, href, classes) {
        this.elem.innerHTML += `<li><a class="${classes}" href="${href}">${text}</a></li>`;
        return this;
    }
}