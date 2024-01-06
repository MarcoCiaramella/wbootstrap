
/**
 * Represents an HTML element.
 */
export class Element {

    #elem;
    #update;
    #interval;
    #parent;
    static id = 0;

    /**
     * 
     * @param {string} elem one of possible HTML elements
     */
    constructor(elem) {
        if (elem) {
            this.#elem = document.createElement(elem);
            this.#elem.id = Element.id++;
        }
    }

    /**
     * Gets id of this element.
     */
    get id() {
        return this.#elem.id;
    }

    /**
     * Appends an Element as a child.
     * @param {Element} child 
     * @returns {Element} this
     */
    appendChild(child) {
        if (child) {
            child.parent = this;
            this.#elem.appendChild(child.elem);
        }
        return this;
    }

    /**
     * Removes the specified child.
     * @param {Element} child 
     * @returns {Element} this
     */
    removeChild(child) {
        this.#elem.removeChild(child.elem);
        return this;
    }

    /**
     * Sets element's parent.
     */
    set parent(parent) {
        this.#parent = parent;
    }

    /**
     * Gets element's parent.
     */
    get parent() {
        return this.#parent;
    }

    /**
     * Gets the HTML element.
     */
    get elem() {
        return this.#elem;
    }

    /**
     * Sets the HTML element.
     */
    set elem(elem) {
        this.#elem = elem;
    }

    /**
     * Gets the outerHTML.
     */
    get outerHTML() {
        return this.#elem.outerHTML;
    }

    /**
     * Sets the innerText.
     */
    set innerText(text) {
        this.#elem.innerText = text;
    }

    /**
     * Sets the innerHTML.
     */
    set innerHTML(html) {
        this.#elem.innerHTML = html;
    }

    /**
     * Gets the innerHTML.
     */
    get innerHTML() {
        return this.#elem.innerHTML;
    }

    /**
     * Prints the HTML content of this Element.
     * @returns {Element} this
     */
    print() {
        console.log(this.outerHTML);
        return this;
    }

    /**
     * Adds classes.
     * @param  {...string} classes 
     * @returns {Element} this
     */
    addClasses(...classes) {
        this.#elem.classList.add(...classes);
        return this;
    }

    /**
     * Removes classes.
     * @param  {...string} classes 
     * @returns {Element} this
     */
    removeClasses(...classes) {
        this.#elem.classList.remove(...classes);
        return this;
    }

    /**
     * Changes the visibility to "visible".
     * @returns {Element} this
     */
    show() {
        this.style.visibility = "visible";
        return this;
    }

    /**
     * Changes the visibility to "hidden".
     * @returns {Element} this
     */
    hide() {
        this.style.visibility = "hidden";
        return this;
    }

    /**
     * Binds a function for the onclick event.
     * @param {function | null} fun the onclick callback. If null removes the callback
     * @returns {Element} this
     */
    onClick(fun) {
        this.cursor("pointer");
        if (fun) {
            this.#elem.onclick = () => fun(this);
        }
        else {
            this.#elem.onclick = null;
        }
        return this;
    }

    /**
     * Removes this Element.
     * @returns {Element} this
     */
    remove() {
        this.#elem.remove();
        return this;
    }

    /**
     * Replaces in parent this Element with the input Element.
     * @param {Element} elem 
     * @returns {Element} this
     */
    replace(elem) {
        if (this.parent) {
            this.parent.elem.replaceChild(elem.elem, this.elem);
            elem.parent = this.parent;
        }
        return this;
    }

    /**
     * Binds a function for the update event.
     * @param {function} fun 
     * @returns {Element} this
     */
    onUpdate(fun) {
        this.#update = () => fun(this);
        return this;
    }

    /**
     * Starts the update loop. On each cycle will be invoked the function specified with onUpdate method.
     * @param {number} millis interval time in milliseconds between two cycles
     * @returns {Element} this
     */
    startUpdate(millis) {
        this.#interval = setInterval(this.#update, millis);
        return this;
    }

    /**
     * Stops the update loop.
     * @returns {Element} this
     */
    stopUpdate() {
        clearInterval(this.#interval);
        return this;
    }

    /**
     * Sets the cursor type.
     * @param {string} type one of HTML supported types
     * @returns {Element} this
     */
    cursor(type) {
        this.style.cursor = type;
        return this;
    }

    /**
     * Sets a color.
     * @param {string} c 
     * @returns {Element} this
     */
    color(c) {
        this.style.color = c;
        return this;
    }

    /**
     * Sets a background color.
     * @param {string} c 
     * @returns {Element} this
     */
    backgroundColor(c) {
        this.style.backgroundColor = c;
        return this;
    }

    /**
     * Sets a background image in base64.
     * @param {string} imageBase64 
     * @param {string} backgroundSize a CSS background-size property value
     * @param {string | number} aspectRatio CSS aspect-ratio property
     * @returns {Element} this
     */
    backgroundImage(imageBase64, backgroundSize, aspectRatio) {
        this.style.backgroundImage = `url(${imageBase64})`;
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundSize = backgroundSize;
        aspectRatio = aspectRatio ? aspectRatio : 1;
        this.style.cssText += `aspect-ratio:${aspectRatio}`;
        return this;
    }

    /**
     * Sets tooltip.
     * @param {string} text tooltip
     * @returns {Element} this
     */
    setTooltip(text) {
        this.#elem.setAttribute("aria-hidden", true);
        this.#elem.setAttribute("data-bs-toggle", "tooltip");
        this.#elem.setAttribute("data-bs-placement", "top");
        this.#elem.setAttribute("title", text);
        return this;
    }

    /**
     * Sets element size.
     * @param {string} width 
     * @param {string} height 
     * @returns {Element} this
     */
    size(width, height) {
        this.style.width = width;
        this.style.height = height;
        return this;
    }

    /**
     * Sets a CSS filter.
     * @param {string} filter CSS filter
     * @returns {Element} this
     */
    filter(filter) {
        this.style.filter = filter;
        return this;
    }

    /**
     * Binds a function for the onwheel event.
     * @param {function} fun 
     * @returns {Element} this
     */
    onWheel(fun) {
        this.#elem.onwheel = event => fun(this, event);
        return this;
    }

    /**
     * Horizontally centers this element. 
     * @returns {Element} this
     */
    center() {
        this.style.margin = "auto";
        return this;
    }

    /**
     * Sets z-index property.
     * @param {number} z 
     * @returns {Element} this
     */
    zIndex(z) {
        this.style.zIndex = z;
        return this;
    }

    /**
     * Sets CSS display property.
     * @param {string} d 
     * @returns {Element} this
     */
    display(d) {
        this.style.display = d;
        return this;
    }

    /**
     * Sets CSS max width property.
     * @param {string} mw 
     * @returns {Element} this
     */
    maxWidth(mw) {
        this.style.maxWidth = mw;
        return this;
    }

    /**
     * Sets CSS min width property.
     * @param {string} mw 
     * @returns {Element} this
     */
    minWidth(mw) {
        this.style.minWidth = mw;
        return this;
    }

    /**
     * Sets CSS max height property.
     * @param {string} mh 
     * @returns {Element} this
     */
    maxHeight(mh) {
        this.style.maxHeight = mh;
        return this;
    }

    /**
     * Sets CSS min height property.
     * @param {string} mh 
     * @returns {Element} this
     */
    minHeight(mh) {
        this.style.minHeight = mh;
        return this;
    }

    /**
     * Gets element style property.
     */
    get style() {
        return this.#elem.style;
    }

    /**
     * Binds a function for the onmouseover event.
     * @param {function} fun 
     * @returns {Element} this
     */
    onMouseOver(fun) {
        this.#elem.onmouseover = event => fun(this, event);
        return this;
    }

    /**
     * Binds a function for the onmouseleave event.
     * @param {function} fun 
     * @returns {Element} this
     */
    onMouseLeave(fun) {
        this.#elem.onmouseleave = event => fun(this, event);
        return this;
    }

    /**
     * Adds CSS animation to this element.
     * @param {string} name 
     * @param {string} duration 
     * @param {string} timingFunction 
     * @param {string} delay 
     * @param {string} iterationCount 
     * @param {string} direction 
     * @param {string} fillMode 
     * @param {string} playState 
     * @returns {Element} this
     */
    addAnimation(name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
        const animation = `${name ? name : ""} ${duration ? duration : ""} ${timingFunction ? timingFunction : ""} ${delay ? delay : ""} ${iterationCount ? iterationCount : ""} ${direction ? direction : ""} ${fillMode ? fillMode : ""} ${playState ? playState : ""}`;
        if (this.style.animation) {
            this.style.animation += `, ${animation}`;
        }
        else {
            this.style.animation = animation;
        }
        return this;
    }

    /**
     * Adds CSS transition to this element.
     * @param {string} property 
     * @param {string} duration 
     * @param {string} timingFunction 
     * @param {string} delay 
     * @returns {Element} this
     */
    addTransition(property, duration, timingFunction, delay) {
        const transition = `${property} ${duration} ${timingFunction ? timingFunction : ""} ${delay ? delay : ""}`;
        if (this.style.transition) {
            this.style.transition += `, ${transition}`;
        }
        else {
            this.style.transition = transition;
        }
        return this;
    }
}