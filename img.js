import { Element } from "./element";

export class Img extends Element {

    constructor(src, alt, objectFit, aspectRatio) {
        super("img");
        this.elem.src = src;
        this.elem.alt = alt;
        this.elem.style.maxWidth = "100%";
        if (objectFit) this.elem.style.objectFit = objectFit;
        if (aspectRatio) this.elem.style.cssText += `aspect-ratio:${aspectRatio}`;
    }

    set src(s) {
        this.elem.src = s;
    }

    get src() {
        return this.elem.src;
    }
}
