import style_css from "./style.css"

class WikiContent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.log("style: ", this.style())
		this.appendChild(this.style())
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
