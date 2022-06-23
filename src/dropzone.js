import { Element } from "./element";
import { Input } from "./input";
import { Label } from "./label";

/**
 * Dropzone element.
 */
export class Dropzone extends Element {

    /**
     * 
     * @param {string} txt the text in the dropzone
     * @param {number} fontSize expressed in pt
     * @param {function} onDrop function for the ondrop event
     * @param {function} onDragover function for the ondragover event
     * @param {function} onSelect function called when a file(s) is selected. Passes this file(s) to the function
     */
    constructor(txt, fontSize, onDrop, onDragover, onSelect) {
        super("div");
        this.style.border = "2px dashed #ddd";
        this.style.borderRadius = "5px";
        this.style.textAlign = "center";
        this.style.font = `${fontSize}pt bold arial`;
        this.style.color = "#bbb";
        this.backgroundColor("#eee");
        if (onDrop) this.elem.ondrop = onDrop;
        if (onDragover) this.elem.ondragover = onDragover;
        const input = new Input("file");
        if (onSelect) input.onChange(onSelect);
        input.style.display = "none";
        this.appendChild(new Label(txt, input).size("100%", "100%"));
    }
}