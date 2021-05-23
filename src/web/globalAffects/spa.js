import updatepathname from "Events/updatepathname"
/*
 * SPAのため１枚のHTMLを操作して表現する
 * よって、遷移はブロックして、パスネームだけ変更してレンダリング
 */

Array.from(document.querySelector("body").children, child => {
	try {
		child.shadowRoot.querySelectorAll("a").forEach( a => {
			a.addEventListener("click", event => {
				event.preventDefault();
				window.history.pushState(null, "", a.href)
				document.querySelector("wiki-article").dispatchEvent(updatepathname)
			})
		})
	} catch {
		// shadow root がないの場合エラーをキャッチする
	}
})

window.addEventListener("popstate", () => {
	// updatepathname event で更新
	document.querySelector("wiki-article").dispatchEvent(updatepathname)
})
