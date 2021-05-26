class WikiTitle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		const title = this.getAttribute("title") || "cannot referenced title"
		this.shadowRoot.innerHTML = `
		<a href="/"><h1>${title}</h1></a>
		<style>
		h1 {
			display: inline;
		}
		a {
			text-decoration: none;
		}
		a:link, :visited {
			color: #F0F0F0;
		}
		a:hover {

		}
		a:active, a:focus {

		}
		</style>
		`
	}
	Style() {
		const style = document.createElement("style")
		style.textContent = `
		a {
			font-size: 1.7em;
			text-decoration: none;
		}
		a:link, :visited {
			color: #F0F0F0;
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
