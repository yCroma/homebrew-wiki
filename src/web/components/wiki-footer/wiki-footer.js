class WikiFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.innerHTML = `
		<div class="wrapper">
		<div class="contact">Contact</div>
		<wiki-contact svg="logo-github.svg" text="GitHub" url="https://github.com/yCroma"></wiki-contact>
		<wiki-contact svg="logo-twitter.svg" text="Twitter" url="https://twitter.com/_yCroma"></wiki-contact>
		</div>
		`
		this.shadowRoot.appendChild(this.Style())
	}
	Style() {
		const style = document.createElement("style")
		style.textContent = `
		div {
			background-color: #D1D5DB;
		}
		div.wrapper {
			padding: 5px;
		}
		div.contact {
			padding-left: 5px;
		}
		`
		return style
	}
}

customElements.define("wiki-footer",WikiFooter)
