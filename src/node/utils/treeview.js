const fs = require("fs/promises")
const readfile = require("./readfile")

async function asyncTreeJSON(PagesPath, DocumentRoot) {
	let JSON = []
	const filenames = await fs.readdir(PagesPath)
	for( const filename of filenames ) {
		JSON.push(await readfile(filename, PagesPath, DocumentRoot))
	}
	return JSON
}

module.exports = asyncTreeJSON
