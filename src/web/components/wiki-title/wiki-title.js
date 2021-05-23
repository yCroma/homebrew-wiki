class WikiTitle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = `
		<a href="/">Cro Wiki</a>
		`
		this.shadowRoot.append(this.Style())
	}
	Style() {
		const style = document.createElement("style")
		style.textContent = `
		a {
			font-size: 1.7em;
			text-decoration: none;
		}
		a:link, :visited {
			color: black;
		}
		a:hover {
		
		}
		a:active, a:focus {

		}
		`
		return style
	}
}

customElements.define("wiki-title", WikiTitle)
