'use strict';
const fs = jest.createMockFromModule('fs/promises')

let mockFiles = Object.create(null)
function __setMockFiles(newMockFiles) {
	// 利用するデータを作る
	mockFiles = newMockFiles
}

function access2children(fullpath, mockFiles) {
	// TODO: 相対パスの場合は正規表現処理
	const pathsplit = fullpath.split("/")
	const children = pathsplit.reduce( (accumulator, currentpath, index, array) => {
		// 初回のみ mockFiles、2回目以降は accumulator
		const filejson = index === 0 ? mockFiles : accumulator;
		// filejson pages 以下を取得
		const fileindex = filejson.findIndex( file => {
			return file.name === currentpath
		})
		// -1 を false にする
		const fileexist = fileindex >= 0 ? fileindex : false;
		const files = filejson[fileindex].children
		// 戻り値でチルドレンを渡す
		return files
	}, mockFiles)
	const checkedchildren = children === "undefined" ? [] : children
	return checkedchildren
}

function file2dirent(file) {
	// files have no children and file.children is not defined
	if (typeof file.children === "undefined"){
		file.children = []
	}
	const dirent = {
		name: file.name,
		children: file.children.length
	}
	dirent.isDirectory = () => {
		return dirent.children ? true : false
	}
	return dirent
}

async function readdir(dirpath, options) {
	const pathsplit = dirpath.split("/")
	const entries = []

	if(options === null || options === undefined) {
		const files = access2children(dirpath, mockFiles)
		files.forEach( file => {
			entries.push(file.name)
		})
		return entries

	} else if(options.withFileTypes) {
		// 再帰して指定のフォルダ内のchildrenを取得
		const files = access2children(dirpath, mockFiles)
		try {
			files.forEach( file => {
				const dirent = file2dirent(file)
				entries.push(dirent)
			})
		} catch (error) {
			// ファイルに対してこの関数を利用するとfilesがundefinedとなりエラーが出る
			// その際に関数が止まらないようにするためにリターン
			return;
		}
	}
	return entries
}

async function lstat(fullpath) {
	const children = access2children(fullpath, mockFiles)
	// TODO: name: lstat.name
	// access2children はファイルのパスを与えた際にundefinedを返す
	// undefined に対し children.length は使えないため、その時にエラーが発生する
	// エラーが起こる = ファイルである
	const isFile = () => {
		try {
			return children.length === 0
		} catch {
			return true
		}
	}
	const isDirectory = () => {
		try {
			return children.length > 0
		} catch {
			return false
		}
	}
	// 例外処理をしないとundefinedが来た時に関数が止まるため、この処理は必要
	const lstat = {
		isDirectory: () => {
			return isDirectory()
		},
		isFile: () => {
			return isFile()
		}
	}
	return lstat
}

fs.__setMockFiles = __setMockFiles;
fs.readdir = readdir;
fs.lstat = lstat;
// my util
fs.access2children = access2children;
fs.file2dirent = file2dirent

module.exports = fs;
