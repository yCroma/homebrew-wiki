class WikiContact extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	async connectedCallback() {
		console.log("is loaded?")
		const svg = this.getAttribute("svg")
		const svgpath = "assets/" + svg
		const svgdata = await import("assets/" + svg).then( module => {
			return module.default
		}).then( svg => {
			return svg
		})
		
		const text = this.getAttribute("text")
		const url = this.getAttribute("url")

		this.shadowRoot.innerHTML = `
		<img src="${svgdata}" alt=""><a href="${url}">${text}</a>
		`
		this.shadowRoot.append(this.style())
	}
	importSVG(svgpath) {
		return import(svgpath).then( svg => {
			return svg.default
		})
	}
	style() {
		const style = document.createElement("style")
		style.textContent = `
		img {
			position: relative;
			top: 2px;
			width: 24px;
			height: 24px;
		}
		a {
			text-decoration: none;
		}
		a:hover, a:link, a:visited, a:active, a:focus{
			color: #111827;
		}
		`
		return style
	}
}

customElements.define("wiki-contact", WikiContact)
