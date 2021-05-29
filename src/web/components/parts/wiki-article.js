import style_css from "./wiki-article.css"

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
				// TODO: style が冗長になっているため、関数に切り出す
				this.shadowRoot.innerHTML = html
				this.shadowRoot.appendChild(this.style())
			}).catch ( async err => {
				this.shadowRoot.innerHTML = await this.return404();
			})
		})
		// ここでstyleを当てている
		this.shadowRoot.appendChild(this.style())
	}

	pathresolve() {
		// gh-pages でホスティングする際にパスがずれるから、対応
		// /homeblew-wiki/index.html → /index.html を出力
		const filepath = window.location.pathname.replace(/\/homebrew\-wiki\//, "/")
		const pathname = filepath.match(/\/$/) 
			? filepath + "index.html" 
			: filepath;
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
