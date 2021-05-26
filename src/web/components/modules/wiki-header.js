import template from "./wiki-header.html"

class WikiHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = template
	}
}

customElements.define("wiki-header", WikiHeader)
