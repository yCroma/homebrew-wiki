class WikiTitle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		const title = this.getAttribute("title") || "cannot referenced title"
		const href = this.getAttribute("href") || "/"
		this.shadowRoot.innerHTML = `
		<a href="${href}">${title}</a>
		<style>
		a {
			font-size: 2em;
			font-weight: bold;
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
