import { ContainerFluid, Container } from "./container";
import { Element } from "./element";

/**
 * Wrapper for grid item.
 */
export class GridItem extends Element {

    /**
     * 
     * @param {Element} elem the grid element
     * @param {string | number} size size in terms of col (col-"size")
     */
    constructor(elem, size) {
        super("div");
        this.addClasses("col" + (size ? `-${size}` : ""));
        this.appendChild(elem);
    }
}

/**
 * Grid row element.
 */
export class GridRow extends Element {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super("div");
        this.addClasses("row", `g-${spacing}`);
    }

    /**
     * Adds GridItem.
     * @param {GridItem} item 
     * @returns {GridRow} this
     */
    add(item) {
        this.appendChild(item);
        return this;
    }

    /**
     * Replaces GridItem.
     * @param {GridItem} newItem 
     * @param {GridItem} oldItem 
     * @returns {GridRow} this
     */
    replace(newItem, oldItem) {
        this.replaceChild(newItem, oldItem);
        return this;
    }

    /**
     * Removes GridItem.
     * @param {GridItem} item 
     * @returns {GridRow} this
     */
    remove(item) {
        item.remove();
        return this;
    }
}

/**
 * A grid with 100% width at all breakpoints.
 */
export class GridFluid extends ContainerFluid {

    #rows;

    /**
     * 
     * @param {GridRow[]} rows 
     */
    constructor(rows) {
        super();
        rows.forEach(row => {
            this.appendChild(row);
        });
        this.#rows = rows;
    }

    /**
     * Gets rows.
     */
    get rows() {
        return this.#rows;
    }

}

/**
 * A grid with 100% width at all breakpoints with x GridItem per row.
 */
export class GridXFluid extends GridFluid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super([new GridRow(spacing)]);
    }

    /**
     * Gets inner row.
     */
    get row() {
        return this.rows[0];
    }
}

/**
 * A grid with 100% width at all breakpoints with 6 GridItem per row.
 */
export class Grid6Fluid extends GridXFluid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-5", "row-cols-xxl-6");
    }
}

/**
 * A grid with 100% width at all breakpoints with 2 GridItem per row.
 */
export class Grid2Fluid extends GridXFluid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-2", "row-cols-lg-2", "row-cols-xl-2", "row-cols-xxl-2");
    }
}

/**
 * A grid with 100% width at all breakpoints with 4 GridItem per row.
 */
export class Grid4Fluid extends GridXFluid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-4", "row-cols-xxl-4");
    }
}

/**
 * A grid with 100% width at all breakpoints with 3 GridItem per row.
 */
export class Grid3Fluid extends GridXFluid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-3", "row-cols-xl-3", "row-cols-xxl-3");
    }
}

/**
 * A grid with max-width at each responsive breakpoint.
 */
export class Grid extends Container {

    #rows;

    /**
     * 
     * @param {GridRow[]} rows 
     */
    constructor(rows) {
        super();
        rows.forEach(row => {
            this.appendChild(row);
        });
        this.#rows = rows;
    }

    /**
     * Gets rows.
     */
    get rows() {
        return this.#rows;
    }

}

/**
 * A grid with max-width at each responsive breakpoint with x GridItem per row.
 */
export class GridX extends Grid {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super([new GridRow(spacing)]);
    }

    /**
     * Gets inner row.
     */
    get row() {
        return this.rows[0];
    }
}

/**
 * A grid with max-width at each responsive breakpoint with 6 GridItem per row.
 */
export class Grid6 extends GridX {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-5", "row-cols-xxl-6");
    }
}

/**
 * A grid with max-width at each responsive breakpoint with 2 GridItem per row.
 */
export class Grid2 extends GridX {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-2", "row-cols-lg-2", "row-cols-xl-2", "row-cols-xxl-2");
    }
}

/**
 * A grid with max-width at each responsive breakpoint with 4 GridItem per row.
 */
export class Grid4 extends GridX {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "row-cols-xl-4", "row-cols-xxl-4");
    }
}

/**
 * A grid with max-width at each responsive breakpoint with 3 GridItem per row.
 */
export class Grid3 extends GridX {

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     */
    constructor(spacing) {
        super(spacing);
        this.row.addClasses("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-3", "row-cols-xl-3", "row-cols-xxl-3");
    }
}