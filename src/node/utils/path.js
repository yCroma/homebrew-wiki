const path = require('path')

class Path {
	constructor( currentpath ) {
		// ~ / ... /src/node/
		// が渡されてくる
		this.currentpath = currentpath
	}

	src() {
		// ~ / ... /src
		// を返す
		return path.resolve(this.currentpath, '..')
	}

	pages() {
		// ~ / ... /src/pages
		// を返す
		return `${this.src()}/pages`
	}

	documentroot() {
		// treeview.jsの再帰関数で利用する際に同じメモリを参照しないようにするために別で定義する必要がある
		// pages() を返す
		// ~ / ... /src/pages
		return `${this.src()}/pages`
	}
}

module.exports = Path
