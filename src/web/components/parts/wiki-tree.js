import treetxt from "Src/tree.txt"

import style_css from "./wiki-tree.css"

class WikiTree extends HTMLElement {
	constructor() {
		super();
		// githubpages でホスティングする際のベースパスを宣言
		// このパスを全ての a タグに付け足す
		this.basepath = "/homebrew-wiki"
		this.attachShadow({mode: "open"})
	}
	connectedCallback() {
		this.shadowRoot.append(this.createTree(), this.style())
		this.QuerySelector(this.shadowRoot)
		this.AddEventListener(this.shadowRoot)
	}
	createTree() {
		const treejson = JSON.parse(treetxt)
		const ul = document.createElement("ul")
		treejson.forEach( JSON => {
			const createBranch = this.createBranch(JSON)
			const li = JSON.children.length > 0 
				? this.createBranch(JSON) 
				: this.createLeaf(JSON)
			if(li) {
				// index.html の際 undefined が返されるためこの処理が必要
				ul.append(li)
			}
		})
		return ul
	}

	createBranch( JSON ) {
		// <li><a href=JSON.path>JSON.name</a></li>
		const li = document.createElement("li")
		const a = document.createElement("a")
		a.textContent = `${JSON.name}`
		// githubpages ではリポジトリでパスが伸びる際に、basepathの設定が必要
		a.setAttribute("href", this.basepath + JSON.path)
		li.append(a)
		/*
		<li>
			<a href=""></a>
			<ul></ul>
		</li>
		*/
		const ul = document.createElement("ul")
		JSON.children.forEach( childJSON => {
			const treeelement = childJSON.children.length > 0 
				? this.createBranch(childJSON) 
				: this.createLeaf(childJSON)
			if(treeelement) {
				// TODO: index.html が Leaf の時の処理が冗長。関数にして切り出す
				ul.append(treeelement)
			}
		})
		li.append(ul)
		return li
	}
	createLeaf( JSON ) {
		if(JSON.path.split("/").pop() === "index.html") {
			// index.html は追加しない
			return
		}
		// index.html でなければ下記の例のような li を返す
		// <li><a href="JSON.path">JSON.name</a></li>
		const a = document.createElement("a")
		// githubpages ではリポジトリでパスが伸びる際に、basepathの設定が必要
		a.setAttribute("href", this.basepath + JSON.path)
		a.textContent = `${JSON.name}`
		const li = document.createElement("li")
		li.append(a)
		return li
	}
	style() {
		const style = document.createElement("style")
		style.textContent = `
		${style_css}
		`
		return style
	}
	QuerySelector(shadowRoot) {
		shadowRoot.querySelectorAll("li").forEach( li => {
			//console.log("query: ", li.querySelector("ul"))
			if(li.querySelector("ul")){
				li.classList.add("fold", "branch")
			} else {
				li.classList.add("reaf")
			}
		})
	}
	AddEventListener(shadowRoot) {
		shadowRoot.addEventListener("click", event => {
			const clickedElement = event.target;
			if (clickedElement.nodeName == "LI") {
				const classList = clickedElement.classList;
				if (classList.contains("fold")) {
					classList.toggle("expand")
				}
			}
		})
		// TODO: 属性を切り替えて、opacity
		shadowRoot.addEventListener("mouseenter", event => {
			const clickedElement = event.srcElement || event.target;
			if (clickedElement.nodeName == "LI") {
				const classList = clickedElement.classList;
				classList.toggle("focus")
			}
		})
		shadowRoot.addEventListener("mouseleave", event => {
			const clickedElement = event.srcElement || event.target;
			if (clickedElement.nodeName == "LI") {
				const classList = clickedElement.classList;
				classList.toggle("focus")
			}
			console.log("mouse out: ", event)
		})
	}
}

customElements.define("wiki-tree", WikiTree)
