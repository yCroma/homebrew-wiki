const path = require("path")

const DirPath = require("./path")

// treejs_dirname
// / ... /src/node
const treejs_dirname = path.resolve(__dirname, "..")
const Path = new DirPath(treejs_dirname)

test('src() is / ... /src ', () => {
	expect(Path.src()).toMatch(/\/src$/)
})

test('pages() is / ... /src/pages', () => {
	expect(Path.pages()).toMatch(/\/src\/pages$/)
})

test('documentroot() is / ... /src/pages', () => {
	expect(Path.documentroot()).toMatch(/\/src\/pages$/)
})
