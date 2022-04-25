import { Element } from "./element";

export class Link extends Element {

    constructor(url, text) {
        super("a");
        this.elem.href = url;
        this.elem.target = "_blank";
        this.innerText = text;
    }
}
