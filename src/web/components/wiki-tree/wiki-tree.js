import treetxt from "Src/tree.txt"
import filesvg_opacity from "assets/document-text-outline-opacity.svg"
import foldersvg_opacity from "assets/folder-outline-opacity.svg"
import folderopensvg_opacity from "assets/folder-open-outline-opacity.svg"

import a_css from "./a.css"
import li_css from "./li.css"
import ul_css from "./ul.css"

class WikiTree extends HTMLElement {
	constructor() {
		super();
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
			ul.append(li)
		})
		console.log("ul: ", ul)
		return ul
	}

	createBranch( JSON ) {
		// <li><a href=JSON.path>JSON.name</a></li>
		const li = document.createElement("li")
		const a = document.createElement("a")
		a.textContent = `${JSON.name}`
		a.setAttribute("href", JSON.path)
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
			ul.append(treeelement)
		})
		li.append(ul)
		return li
	}
	createLeaf( JSON ) {
		// <li><a href="JSON.path">JSON.name</a></li>
		const a = document.createElement("a")
		a.setAttribute("href", JSON.path)
		a.textContent = `${JSON.name}`
		const li = document.createElement("li")
		li.append(a)
		return li
	}
	style() {
		const style = document.createElement("style")
		style.textContent = `
		${a_css}
		${li_css}
		${ul_css}
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
