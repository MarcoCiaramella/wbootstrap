import { Element } from "./element";
import { Input } from "./input";

/**
 * Search bar element.
 */
export class SearchBar extends Element {

    #input;

    /**
     * 
     * @param {string} placeholder 
     * @param {function} onEnter function called when key "Enter" is pressed
     */
    constructor(placeholder, onEnter) {
        super("div");
        this.addClasses("input-group");
        this.#input = new Input("text", placeholder)
            .addClasses("form-control")
            .onEnter(onEnter);
        this.innerHTML = `
              <span class="input-group-text" style="background-color:rgba(0,0,0,0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </span>
              `;
        this.appendChild(this.#input);
    }

    /**
     * Gets search string.
     */
    get value() {
        return this.#input.value;
    }
}