import updatepathname from "Events/updatepathname"
/*
 * SPAのため１枚のHTMLを操作して表現する
 * よって、遷移はブロックして、パスネームだけ変更してレンダリング
 */

// 再帰して全てのshadow dom内にある anchor link にイベントを追加
function addPreventDefault2anker(NodeList) {
	Array.from(NodeList, child => {
		console.log("child: ", child)
		if(child.children.length) {
			addPreventDefault2anker(child.children)
		}
		try {
			child.shadowRoot.querySelectorAll("a").forEach( a => {
				a.addEventListener("click", event => {
					event.preventDefault();
					window.history.pushState(null, "", a.href)
					document.querySelector("wiki-article").dispatchEvent(updatepathname)
				})
			})
		} catch {
			// shadow root がない場合のエラーをキャッチ
		}

	})
}
addPreventDefault2anker(document.querySelector("body").children)


window.addEventListener("popstate", () => {
	// updatepathname event で更新
	document.querySelector("wiki-article").dispatchEvent(updatepathname)
})
