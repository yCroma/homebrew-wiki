import Header from "./wiki-header.html"

class WikiHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open"})
	}

	render() {
		return Header
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.render()
	}
}

customElements.define("wiki-header", MyHeader)

