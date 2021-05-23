import style_css from "./style.css"

class WikiHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = `
		<slot></slot>
		`
		this.shadowRoot.append(this.Style())
	}
	Style() {
		const style = document.createElement("style")
		style.textContent = `
		${style_css}
		`
		return style
	}
}

customElements.define("wiki-header", WikiHeader)
