import { Element } from "./element";

export class NavbarItem extends Element {

    constructor() {
        super("li");
        this.addClasses("nav-item");
    }

    asTextLink(text, href) {
        this.elem.innerHTML = `<a class="nav-link" href="${href}">${text}</a>`;
        return this;
    }

    asElemLink(elem, href) {
        this.elem.innerHTML = `<a class="nav-link" href="${href}">${elem.outerHTML}</a>`;
        return this;
    }

    #dropdownItems(items) {
        let res = "";
        items.forEach(item => {
            res += `<li><a class="dropdown-item" href="${item.href}">${item.text}</a></li>`;
        });
        return res;
    }

    asDropdown(elem, ...items) {
        this.addClasses("dropdown");
        this.innerHTML = `<a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${elem.outerHTML}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            ${this.#dropdownItems(items)}
          </ul>`;
        return this;
    }
}

export class Navbar extends Element {

    constructor(brand, indexHref, logoSrc, ...items) {
        super("nav");
        this.addClasses("navbar", "fixed-top", "navbar-light", "bg-light", "shadow-sm", "navbar-expand-lg");
        let part1 = `<div class="container-fluid">
                <a class="navbar-brand" href="${indexHref}">
                    <img src="${logoSrc}" alt="" width="30" height="auto" class="d-inline-block align-text-top">
                    ${brand}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">`;

        const part2 = `</ul>
                        </div>
                        </div>`;
        items.forEach(item => {
            part1 += item.outerHTML;
        });
        this.elem.innerHTML = part1 + part2;
    }
}