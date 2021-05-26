import template from "./wiki-footer.html"

class WikiFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = template;
		this.style.backgroundColor = "#D1D5DB;"

	}
}

customElements.define("wiki-footer",WikiFooter)
