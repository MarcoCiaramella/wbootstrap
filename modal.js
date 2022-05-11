import { SimpleButton } from "./button";
import { Element } from "./element";

export class Modal extends Element {

  constructor(title, html, button) {
    super("div");
    this.addClasses("modal", "fade");
    // FIXME: default id doesn't work
    this.elem.id = "modal";
    this.elem.tabIndex = -1;
    this.elem.setAttribute("aria-labelledby", "modalLabel");
    this.elem.setAttribute("aria-hidden", "true");
    button.elem.setAttribute("data-bs-toggle", "modal")
    button.elem.setAttribute("data-bs-target", "#modal");
    const closeButton = new SimpleButton("button", null, null);
    closeButton.addClasses("btn-close");
    closeButton.elem.setAttribute("data-bs-dismiss", "modal");
    closeButton.elem.setAttribute("aria-label", "Close");
    this.elem.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">${title}</h5>
            ${closeButton.outerHTML}
          </div>
          <div class="modal-body">
             ${html}
          </div>
        </div>
      </div>`;
  }

  close() {
    this.elem.setAttribute("aria-hidden", "true");
  }
}