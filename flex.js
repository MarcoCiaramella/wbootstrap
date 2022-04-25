/*
The Flexbox Layout (Flexible Box) module (a W3C Candidate Recommendation as of October 2017) aims at providing
a more efficient way to lay out, align and distribute space among items in a container,
even when their size is unknown and/or dynamic (thus the word “flex”).
The main idea behind the flex layout is to give the container the ability to alter
its items’ width/height (and order) to best fill the available space (mostly to accommodate to all kind
of display devices and screen sizes). A flex container expands items to fill available free space or shrinks them to prevent overflow.
Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based).
*/

import { Element } from "./element";

/**
 * Flex element.
 */
class Flex extends Element {

    /**
     * 
     * @param {number} gap gap between elements
     */
    constructor(gap) {
        super("div");
        this.addClasses("d-flex", `gap-${gap}`);
    }

    /**
     * Sets the justify content type.
     * @param {string} type one of the supported bootstrap values
     * @returns this
     */
    justifyContent(type) {
        this.addClasses(`justify-content-${type}`);
        return this;
    }

    /**
     * Sets the align items type.
     * @param {string} type one of the supported bootstrap values
     * @returns this
     */
    alignItems(type) {
        this.addClasses(`align-items-${type}`);
        return this;
    }
}

/**
 * Flex column element.
 */
export class FlexColumn extends Flex {

    /**
     * 
     * @param {number} gap gap between elements
     */
    constructor(gap) {
        super(gap);
        this.addClasses("flex-column");
    }
}

/**
 * Flex row element.
 */
export class FlexRow extends Flex {

    /**
     * 
     * @param {number} gap gap between elements
     */
    constructor(gap) {
        super(gap);
        this.addClasses("flex-row", "flex-wrap");
    }
}

/**
 * Flex column element with full (100%) height.
 */
export class FlexColumnFull extends FlexColumn {

    /**
     * 
     * @param {number} gap gap between elements
     */
    constructor(gap) {
        super(gap);
        this.addClasses("min-vh-100");
    }
}

/**
 * Flex row element with full (100%) width.
 */
export class FlexRowFull extends FlexRow {

    constructor(gap) {
        super(gap);
        this.addClasses("min-vw-100");
    }
}