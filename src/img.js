import { Element } from "./element";

/**
 * Img element.
 */
export class Img extends Element {

    /**
     * 
     * @param {string} src src attribute
     * @param {string} alt alt attribute
     * @param {string} objectFit CSS object-fit property
     * @param {string | number} aspectRatio CSS aspect-ratio property
     */
    constructor(src, alt, objectFit, aspectRatio) {
        super("img");
        this.elem.src = src;
        this.elem.alt = alt;
        this.style.maxWidth = "100%";
        if (objectFit) this.style.objectFit = objectFit;
        if (aspectRatio) this.style.cssText += `aspect-ratio:${aspectRatio}`;
    }

    /**
     * Sets src attribute.
     */
    set src(s) {
        this.elem.src = s;
    }

    /**
     * Gets src attribute.
     */
    get src() {
        return this.elem.src;
    }
}
