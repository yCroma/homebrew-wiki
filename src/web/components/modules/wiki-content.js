import template from "./wiki-content.html"

class WikiContent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = template
		//this.innerHTML = template
	}

	style () {
		const style = document.createElement("style")
		style.textContent = `
		${style_css}
		`
		return style
	}
}

customElements.define("wiki-content", WikiContent)
