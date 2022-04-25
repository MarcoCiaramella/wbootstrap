import { Element } from "./element";
import { MaterialIcon } from "./icon";


/**
 * The button element.
 */
class Button extends Element {

    /**
     * 
     * @param {string} type one of available button types
     * @param {string} text inner text
     */
    constructor(type, text) {
        super("button");
        this.addClasses("btn");
        this.elem.type = type;
        if (text) this.innerText = text;
    }

    /**
     * Disable button.
     */
    disable() {
        this.elem.disabled = true;
    }

    /**
     * Enable button.
     */
    enable() {
        this.elem.disabled = false;
    }
    
    /**
     * Replaces inner HTML with a loading spinner.
     * @returns replaced inner HTML
     */
    runSpinner() {
        const oldInnerHTML = this.innerHTML;
        this.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...';
        return oldInnerHTML;
    }

    /**
     * Binds a function for the onclick event.
     * @param {function} fun 
     * @returns this
     */
     onClick(fun) {
        this.cursor("pointer");
        this.elem.onclick = async () => {
            this.disable();
            const oldInnerHTML = this.runSpinner();
            await fun(this);
            this.innerHTML = oldInnerHTML;
            this.enable();
        };
        return this;
    }
}

/**
 * The simple button element.
 */
export class SimpleButton extends Button {

    /**
     * 
     * @param {string} type one of available button types
     * @param {string} img image src
     * @param {string} text inner text
     */
    constructor(type, img, text) {
        super(type, text);
        img && this.appendChild(img);
    }
}

/**
 * The material icon button element.
 */
export class IconButton extends Button {

    /**
     * 
     * @param {string} type one of available button types
     * @param {string} iconName Material icon name
     * @param {string} text inner text
     */
    constructor(type, iconName, text) {
        super(type, text);
        iconName && this.appendChild(new MaterialIcon(iconName));
    }
}
