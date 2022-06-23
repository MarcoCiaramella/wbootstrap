import { Element } from "./element";

/**
 * Container element.
 */
export class Container extends Element {

    constructor() {
        super("div");
        this.addClasses("container");
    }
}

/**
 * Container fluid element.
 */
export class ContainerFluid extends Element {

    constructor() {
        super("div");
        this.addClasses("container-fluid");
    }
}