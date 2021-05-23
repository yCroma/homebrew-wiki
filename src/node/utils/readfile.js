const fs = require("fs/promises")
const path = require("path")

const readdir = require("./readdir")

async function readfile(filename, PagesPath, DocumentRoot) {
	// 単体のファイルを受け取り
	// そのファイルがディレクトリなら再帰する
	// ファイルならJSONを返す
	let JSON = {}
	// ファイルのフルパス
	const fullpath = path.join(PagesPath, filename)
	// pages からの相対パス
	const abusolutepath = fullpath.replace(`${DocumentRoot}`, "")
	const lstat = await fs.lstat(fullpath)
	if(lstat.isDirectory()) {
		// fullpath の末尾にスラッシュがないため
		// ディレクトリとして区別するためにスラッシュを追加
		const directorypath = abusolutepath + "/"
		JSON.name = filename
		JSON.path = directorypath
		// / ... /pages/dir 下のファイルを取得
		const children = await readdir(fullpath, DocumentRoot)
		JSON.children = children
	} else if (lstat.isFile()) {
		JSON.name = filename
		JSON.path = abusolutepath
		JSON.children = []
	}
	return JSON
}

module.exports = readfile;
