const fs = require("fs/promises")
const path = require("path")

const DirPath  = require("./utils/path")
const TreeView = require("./utils/treeview")

async function init() {
	const Path = new DirPath(__dirname)

	const pages = Path.pages()
	const documentroot = Path.documentroot()

	const TreeJSON = await TreeView(Path.pages(), Path.documentroot())
	const TreeText = JSON.stringify(TreeJSON)
	const TreePath = path.resolve(Path.src(), `tree.txt`)
	fs.writeFile(`${TreePath}`, TreeText)
}

init()
