const fs = require("fs/promises")
const path = require("path")

/*
 * dirpath の中のファイルを読み取る
 * dirctory か file かを判断して、処理したJSONの配列を返す
 */
async function readdir( dirpath, DocumentRoot ) {
	let JSONs = []
	
	// dirpath を与えているため、ここのfs.readdirは必ず必要
	const dirents = await fs.readdir( dirpath, {withFileTypes: true})
	try {
		for (const dirent of dirents) {
			const fullpath = path.join(dirpath, dirent.name)
			const abusolutepath = fullpath.replace(`${DocumentRoot}`, "")
			// directory なら末尾に / がつくように修正
			const dirctorypath = abusolutepath + "/"
			if (dirent.isDirectory()) {
				// dirent is directory
				// mean: fullpath is directory
				const children = await readdir(fullpath, DocumentRoot)
				// dirctoryからchildrenを生成
				let newJSON = {
					name: dirent.name,
					path: dirctorypath,
					children: children
				}
				JSONs.push(newJSON)
			} else {
				const newJSON = {
					name: dirent.name,
					path: abusolutepath,
					children: []
				}
				JSONs.push(newJSON)
			}
		}
	} catch (error) {
		// ファイルに対して関数が利用された際 dirents が undefined となる
		// その際はエラーをキャッチしてリターン
		return
	}
	return JSONs
}

module.exports = readdir
