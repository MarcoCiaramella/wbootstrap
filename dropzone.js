import { Element } from "./element";

/**
 * Dropzone element.
 */
export class Dropzone extends Element {

    /**
     * 
     * @param {string} txt the text in the dropzone
     * @param {number} fontSize expressed in pt
     */
    constructor(txt, fontSize) {
        super("div");
        this.elem.style.border = "2px dashed #bbb";
        this.elem.style.borderRadius = "5px";
        this.elem.style.textAlign = "center";
        this.elem.style.font = `${fontSize}pt bold arial`;
        this.elem.style.color = "#bbb";
        this.innerHTML = `
                        <label style="width: 100%;height: 100%;">
                            <div style="padding: 25%;">${txt}</div>
                            <input type="file" style="display:none">
                        </label>`;
    }

    /**
     * Binds a function for the ondrop event.
     * @param {function} fun 
     * @returns this
     */
    onDrop(fun) {
        this.elem.ondrop = fun;
        return this;
    }

    /**
     * Binds a function for the ondragover event.
     * @param {function} fun 
     * @returns this
     */
    onDragover(fun) {
        this.elem.ondragover = fun;
        return this;
    }
}