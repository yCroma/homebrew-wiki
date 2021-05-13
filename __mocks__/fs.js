'use strict';
const fs = jest.createMockFromModule('fs/promises')

let mockFiles = Object.create(null)
function __setMockFiles(newMockFiles) {
	// 利用するデータを作る
	mockFiles = newMockFiles
}
async function readdir(dirpath, options) {
	let entries = []

	if(options === null || options === undefined) {
		const fileindex = mockFiles.findIndex( file => {
			return file.name === dirpath
		})
		const files = mockFiles[fileindex].children
		files.forEach( file => {
			entries.push(file.name)
		})

	return entries
}

fs.__setMockFiles = __setMockFiles;
fs.readdir = readdir;

module.exports = fs;
