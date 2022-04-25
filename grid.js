import { Element } from "./element";
/* TODO DOC */
export class GridItem extends Element {

    constructor() {
        super("div");
        this.addClasses("col");
    }
}

export class Grid extends Element {

    constructor(numCols) {
        super("div");
        this.addClasses("row", "row-cols-1", `row-cols-md-${numCols}`, "g-4");
    }

    add(elem) {
        this.appendChild(elem);
        return this;
    }

    remove(elem) {
        elem.remove();
        return this;
    }
}