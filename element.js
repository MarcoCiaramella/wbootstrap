
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
        this.elem.onclick = () => fun(this);
        return this;
    }

    /**
     * Removes this Element.
     */
    remove() {
        this.#elem.remove();
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
}