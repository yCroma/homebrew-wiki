import template from "./wiki-content.html"

class WikiContent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = template
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
