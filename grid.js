import { Element } from "./element";
/* TODO DOC */

class Grid extends Element {

    constructor(spacing) {
        super("div");
        this.addClasses("row", `g-${spacing}`);
    }

    add(item) {
        item.addClasses("col");
        this.appendChild(item);
        return this;
    }

    remove(item) {
        item.remove();
        return this;
    }
}

export class Grid6 extends Grid {

    constructor(spacing) {
        super(spacing);
        this.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-5", "row-cols-xxl-6");
    }
}

export class Grid2 extends Grid {

    constructor(spacing) {
        super(spacing);
        this.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-2", "row-cols-lg-2", "row-cols-xl-2", "row-cols-xxl-2");
    }
}
