
/**
 * Represents an HTML element.
 */
export class Element {

    #elem;
    #update;
    #interval;
    static id = 0;

    /**
     * 
     * @param {string} elem one of possible HTML elements
     */
    constructor(elem) {
        this.#elem = document.createElement(elem);
        this.#elem.id = Element.id++;
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
     * @returns this
     */
    appendChild(child) {
        child && this.#elem.appendChild(child.elem);
        return this;
    }

    /**
     * Gets the HTML element.
     */
    get elem() {
        return this.#elem;
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
     * @returns this
     */
    print() {
        console.log(this.outerHTML);
        return this;
    }

    /**
     * Adds classes.
     * @param  {...string} classes 
     * @returns this
     */
    addClasses(...classes) {
        classes.forEach(cls => {
            this.#elem.classList.add(cls);
        });
        return this;
    }

    /**
     * Changes the visibility to "visible".
     * @returns this
     */
    show() {
        this.#elem.style.visibility = "visible";
        return this;
    }

    /**
     * Changes the visibility to "hidden".
     * @returns this
     */
    hide() {
        this.#elem.style.visibility = "hidden";
        return this;
    }

    /**
     * Binds a function for the onclick event.
     * @param {function} fun 
     * @returns this
     */
    onClick(fun) {
        this.cursor("pointer");
        this.#elem.onclick = () => fun && fun(this);
        return this;
    }

    /**
     * Removes this Element.
     * @returns this
     */
    remove() {
        this.#elem.remove();
        return this;
    }

    /**
     * Replaces oldChild with newChild.
     * @param {Element} newChild 
     * @param {Element} oldChild 
     * @returns this
     */
    replaceChild(newChild, oldChild) {
        this.#elem.replaceChild(newChild.elem, oldChild.elem);
        return this;
    }

    /**
     * Binds a function for the update event.
     * @param {function} fun 
     * @returns this
     */
    onUpdate(fun) {
        this.#update = () => fun(this);
        return this;
    }

    /**
     * Starts the update loop. On each cycle will be invoked the function specified with onUpdate method.
     * @param {number} millis interval time in milliseconds between two cycles
     * @returns this
     */
    startUpdate(millis) {
        this.#interval = setInterval(this.#update, millis);
        return this;
    }

    /**
     * Stops the update loop.
     * @returns this
     */
    stopUpdate() {
        clearInterval(this.#interval);
        return this;
    }

    /**
     * Sets the cursor type.
     * @param {string} type one of HTML supported types
     * @returns this
     */
    cursor(type) {
        this.#elem.style.cursor = type;
        return this;
    }

    /**
     * Sets a color.
     * @param {string} c 
     * @returns this
     */
    color(c) {
        this.#elem.style.color = c;
        return this;
    }

    /**
     * Sets a background color.
     * @param {string} c 
     * @returns this
     */
    backgroundColor(c) {
        this.#elem.style.backgroundColor = c;
        return this;
    }

    /**
     * Sets a background image in base64.
     * @param {string} imageBase64 
     * @returns this
     */
    backgroundImage(imageBase64) {
        this.#elem.style.backgroundImage = `url(${imageBase64})`;
        this.#elem.style.backgroundRepeat = "no-repeat";
        this.#elem.style.backgroundSize = "cover";
        return this;
    }

    /**
     * Sets tooltip.
     * @param {string} text tooltip
     * @returns this
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
     * @returns this
     */
    size(width, height) {
        this.#elem.style.width = width;
        this.#elem.style.height = height;
        return this;
    }

    /**
     * Sets a CSS filter.
     * @param {string} filter CSS filter
     * @returns this
     */
    filter(filter) {
        this.#elem.style.filter = filter;
        return this;
    }

    /**
     * Binds a function for the onwheel event.
     * @param {function} fun 
     * @returns this
     */
    onWheel(fun) {
        this.#elem.onwheel = event => fun(event);
        return this;
    }

    /**
     * Horizontally centers this element. 
     * @returns this
     */
    center() {
        this.#elem.style.margin = "auto";
        return this;
    }

    /**
     * Sets z-index property.
     * @param {number} z 
     * @returns this
     */
    zIndex(z) {
        this.#elem.style.zIndex = z;
        return this;
    }

    /**
     * Sets CSS display property.
     * @param {string} d 
     * @returns this
     */
    display(d) {
        this.#elem.style.display = d;
        return this;
    }

    /**
     * Sets CSS max width property.
     * @param {string} mw 
     * @returns this
     */
    maxWidth(mw) {
        this.#elem.style.maxWidth = mw;
        return this;
    }

    /**
     * Sets CSS min width property.
     * @param {string} mw 
     * @returns this
     */
    minWidth(mw) {
        this.#elem.style.minWidth = mw;
        return this;
    }

    /**
     * Sets CSS max height property.
     * @param {string} mh 
     * @returns this
     */
    maxHeight(mh) {
        this.#elem.style.maxHeight = mh;
        return this;
    }

    /**
     * Sets CSS min height property.
     * @param {string} mh 
     * @returns this
     */
    minHeight(mh) {
        this.#elem.style.minHeight = mh;
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
     * @returns this
     */
    onMouseOver(fun) {
        this.#elem.onmouseover = event => fun(event);
        return this;
    }

    /**
     * Binds a function for the onmouseleave event.
     * @param {function} fun 
     * @returns this
     */
    onMouseLeave(fun) {
        this.#elem.onmouseleave = event => fun(event);
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
     * @returns this
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
     * @returns this
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