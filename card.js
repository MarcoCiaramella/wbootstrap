import { Element } from "./element";

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
export class CardImg extends Element {

    /**
     * 
     * @param {string} src image src
     * @param {string} alt image alt
     */
    constructor(src, alt) {
        super("img");
        this.addClasses("card-img-top", "p-3");
        this.elem.src = src;
        this.elem.alt = alt;
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