import { Element } from "./element";

export class Img extends Element {

    constructor(src, alt, width) {
        super("img");
        this.elem.src = src;
        this.elem.alt = alt;
        this.elem.style.width = width;
        this.elem.style.height = "auto";
        this.elem.style.maxWidth = "100%";
    }

    set src(s) {
        this.elem.src = s;
    }

    get src() {
        return this.elem.src;
    }
}
