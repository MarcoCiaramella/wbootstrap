import { Element } from "./element";
import { MaterialIcon } from "./icon";
import { Text } from "./text";


/**
 * The button element.
 */
class Button extends Element {

    /**
     * 
     * @param {string} type one of available button types
     */
    constructor(type) {
        super("button");
        this.addClasses("btn");
        this.elem.type = type;
    }

    /**
     * Disable button.
     * @returns this
     */
    disable() {
        this.elem.disabled = true;
        return this;
    }

    /**
     * Enable button.
     * @returns this
     */
    enable() {
        this.elem.disabled = false;
        return this;
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

    #class(cls, outline) {
        this.addClasses(`btn-${outline ? "outline-" : ""}${cls}`);
    }

    /**
     * Sets as primary button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asPrimary(outline) {
        this.#class("primary", outline);
        return this
    }

    /**
     * Sets as secondary button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asSecondary(outline) {
        this.#class("secondary", outline);
        return this
    }

    /**
     * Sets as success button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asSuccess(outline) {
        this.#class("success", outline);
        return this
    }

    /**
     * Sets as danger button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asDanger(outline) {
        this.#class("danger", outline);
        return this
    }

    /**
     * Sets as warning button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asWarning(outline) {
        this.#class("warning", outline);
        return this
    }

    /**
     * Sets as info button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asInfo(outline) {
        this.#class("info", outline);
        return this
    }

    /**
     * Sets as light button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asLight(outline) {
        this.#class("light", outline);
        return this
    }

    /**
     * Sets as dark button.
     * @param {boolean | null} outline specifies outline mode
     * @returns this
     */
    asDark(outline) {
        this.#class("dark", outline);
        return this
    }

    /**
     * Sets as link button.
     * @returns this
     */
    asLink() {
        this.#class("link", outline);
        return this
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
        super(type);
        img && this.appendChild(img);
        text && this.appendChild(new Text("i", text));
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
        super(type);
        iconName && this.appendChild(new MaterialIcon(iconName));
        text && this.appendChild(new Text("i", text));
    }
}
