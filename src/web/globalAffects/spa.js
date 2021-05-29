import updatepathname from "Events/updatepathname"
/*
 * SPAのため１枚のHTMLを操作して表現する
 * よって、遷移はブロックして、パスネームだけ変更してレンダリング
 */

/*
 * 全ての child は shadowRoot の下にコンポーネントを所持している
 * childの子要素の shadowRoot を探す
 */

// 再帰して全てのshadow dom内にある anchor link にイベントを追加
function addPreventDefault2anker(NodeList) {
	Array.from(NodeList, child => {
		// child の shadowRoot が a タグを持っていればイベント追加
		try {
			child.shadowRoot.querySelectorAll("a").forEach( a => {
				a.addEventListener("click", event => {
					event.preventDefault();
					window.history.pushState(null, "", a.href)
					// wiki-content 下の wiki-articleに対してイベントディスパッチ
					document.querySelector("wiki-content")
						.shadowRoot.querySelector("wiki-article")
							.dispatchEvent(updatepathname)
				})
			})
		} catch {
			// shadow root がない場合のエラーをキャッチ
		}

		// child の shadowRoot が子要素を持っていれば再帰
		try {
			if(child.shadowRoot.children.length) {
				addPreventDefault2anker(child.shadowRoot.children)
			}
		} catch {
			// shadow root がない場合のエラーをキャッチ
		}

	})
}
addPreventDefault2anker(document.querySelector("body").children)


window.addEventListener("popstate", () => {
	// updatepathname event で更新
	document.querySelector("wiki-content")
		.shadowRoot.querySelector("wiki-article")
		.dispatchEvent(updatepathname)
})
