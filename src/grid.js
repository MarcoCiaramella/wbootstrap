import { ContainerFluid, Container } from "./container";
import { Element } from "./element";

/**
 * Wrapper for grid item.
 */
export class GridItem extends Element {

    /**
     * 
     * @param {Element} elem the grid element
     */
    constructor(elem) {
        super("div");
        this.addClasses("col");
        this.appendChild(elem);
    }
}

/**
 * Grid row element.
 */
class GridRow extends Element {

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

    #row

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     * @param {string | number} xs number of GridItem per row on xs breakpoint
     * @param {string | number} sm number of GridItem per row on sm breakpoint
     * @param {string | number} md number of GridItem per row on md breakpoint
     * @param {string | number} lg number of GridItem per row on lg breakpoint
     * @param {string | number} xl number of GridItem per row on xl breakpoint
     * @param {string | number} xxl number of GridItem per row on xxl breakpoint
     */
    constructor(spacing, xs, sm, md, lg, xl, xxl) {
        super();
        this.#row = new GridRow(spacing).addClasses(`row-cols-${xs}`, `row-cols-sm-${sm}`, `row-cols-md-${md}`, `row-cols-lg-${lg}`, `row-cols-xl-${xl}`, `row-cols-xxl-${xxl}`);
        this.appendChild(this.#row);
    }

    /**
     * Gets inner row.
     */
    get row() {
        return this.#row;
    }
}

/**
 * A grid with max-width at each responsive breakpoint.
 */
export class Grid extends Container {

    #row;

    /**
     * 
     * @param {string | number} spacing spacing between GridItem
     * @param {string | number} xs number of GridItem per row on xs breakpoint
     * @param {string | number} sm number of GridItem per row on sm breakpoint
     * @param {string | number} md number of GridItem per row on md breakpoint
     * @param {string | number} lg number of GridItem per row on lg breakpoint
     * @param {string | number} xl number of GridItem per row on xl breakpoint
     * @param {string | number} xxl number of GridItem per row on xxl breakpoint
     */
    constructor(spacing, xs, sm, md, lg, xl, xxl) {
        super();
        this.#row = new GridRow(spacing).addClasses(`row-cols-${xs}`, `row-cols-sm-${sm}`, `row-cols-md-${md}`, `row-cols-lg-${lg}`, `row-cols-xl-${xl}`, `row-cols-xxl-${xxl}`);
        this.appendChild(this.#row);
    }

    /**
     * Gets inner row.
     */
    get row() {
        return this.#row;
    }
}