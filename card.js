import { Element } from "./element";
import { Img } from "./img";

/**
 * Card header element.
 */
export class CardHeader extends Element {

    constructor() {
        super("div");
        this.addClasses("card-header");
    }
}

/**
 * Card body element.
 */
export class CardBody extends Element {

    /**
     * 
     * @param {string} title 
     * @param {string} text 
     */
    constructor(title, text) {
        super("div");
        this.addClasses("card-body");
        this.innerHTML += title ? `<h5 class="card-title">${title}</h5>` : "";
        this.innerHTML += text ? `<p class="card-text">${text}</p>` : "";
    }
}

/**
 * Card footer element.
 */
export class CardFooter extends Element {

    constructor() {
        super("div");
        this.addClasses("card-footer");
    }
}

/**
 * Card image element.
 */
export class CardImg extends Img {

    /**
     * 
     * @param {string} src image src
     * @param {string} alt image alt
     * @param {string} objectFit CSS object-fit parameter
     * @param {string | number} aspectRatio CSS aspect-ratio parameter
     */
    constructor(src, alt, objectFit, aspectRatio) {
        super(src, alt, objectFit, aspectRatio);
        this.addClasses("card-img-top", "p-0");
    }
}

/**
 * Card element.
 */
export class Card extends Element {

    /**
     * 
     * @param {CardHeader} header 
     * @param {CardImg} img 
     * @param {CardBody} body 
     * @param {CardFooter} footer 
     * @param {string} width card width
     */
    constructor(header, img, body, footer, width) {
        super("div");
        this.addClasses("card", "text-break");
        if (width) {
            this.elem.style.width = width;
        }
        header && this.appendChild(header);
        img && this.appendChild(img);
        body && this.appendChild(body);
        footer && this.appendChild(footer);
    }
}