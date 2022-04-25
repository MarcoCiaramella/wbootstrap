import { Element } from "./element";

export class Spinner extends Element {

    constructor(text) {
        super("div");
        this.addClasses("text-center");
        this.innerHTML = `${text}<br><br><div class="spinner-border" role="status"></div>`;
    }
}