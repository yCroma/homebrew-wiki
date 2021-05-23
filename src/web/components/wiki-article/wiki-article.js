import style_css from "./style.css"

class WikiArticle extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"})
	}
	async connectedCallback() {
		// 描画用の初期値
		this.shadowRoot.innerHTML = await this.returnHTML();
		//console.log("importHTML: ", this.importHTML())
		// anker linkを検知して、import
		// TODO: 関数に切り出す
		this.addEventListener("updatepathname", event => {
			import(`Src/pages` + `${this.pathresolve()}`).then ( module => {
				return module.default
			}).then( html => {
				this.shadowRoot.innerHTML = html
			}).catch ( async err => {
				this.shadowRoot.innerHTML = await this.return404();
			})
		})
		this.appendChild(this.style())
	}

	pathresolve() {
		// / で終わるディレクトリのパスの時に対応する
		// sample) /dir/
		const pathname = window.location.pathname.match(/\/$/) 
			? window.location.pathname + "index.html" 
			: window.location.pathname
		console.log("pathname: ",pathname)
		return pathname
	}

	return404() {
		return import("Src/pages/404.html").then( module => {
			return module.default
		}).then( html => {
			return html
		})
	}

	returnHTML() {
		return import(`Src/pages` + `${this.pathresolve()}`).then ( module => {
			return module.default
		}).then( html => {
			return html
		}).catch ( err => {
			return this.return404()
		})
	}

	style() {
		const style = document.createElement("style")
		style.textContent = `
			${style_css}
		`
		return style
	}

}

customElements.define("wiki-article", WikiArticle)
