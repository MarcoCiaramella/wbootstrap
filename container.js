import { Element } from "./element";

/**
 * Container element.
 */
export class Container extends Element {

    constructor() {
        super("div");
        this.addClasses("container", "text-center");
    }
}