'use strict';

const readdir = require("./readdir")

jest.mock("fs/promises")

describe('readdir test', () => {
	test('read only file directory', async () => {
		const dir = [
			{
				name: "fullpath",
				children: [
					{
						name: "pages",
						children: [
							{
								name: "file1.html",
								children: []
							},
							{
								name: "file2.html",
								children: []
							},
							{
								name: "file3.html",
								children: []
							}
						]
					}
				]
			}
		]
		require("fs/promises").__setMockFiles(dir)
		const files = await readdir("fullpath/pages", "fullpath/pages")
		const ans = [
			{
				name: "file1.html",
				path: "/file1.html",
				children: []
			},
			{
				name: "file2.html",
				path: "/file2.html",
				children: []
			},
			{
				name: "file3.html",
				path: "/file3.html",
				children: []
			}
		]
		expect(JSON.stringify(ans)).toStrictEqual(JSON.stringify(files))
	})

	test('read file and dir', async () => {
		const dir = [
			{
				name: "pages",
				children: [
					{
						name: "index.html",
					},
					{
						name: "utils",
						children: [
							{
								name: "http.js"
							},
							{
								name: "path.js"
							}
						]
					}
				]
			}
		]
		require("fs/promises").__setMockFiles(dir)
		const files = await readdir("pages", "pages")
		const ans = [
					{
						name: "index.html",
						path: "/index.html",
						children: []
					},
					{
						name: "utils",
						path: "/utils/",
						children: [
							{
								name: "http.js",
								path: "/utils/http.js",
								children: []
							},
							{
								name: "path.js",
								path: "/utils/path.js",
								children: []
							}
						]
					}
		]
		expect(JSON.stringify(ans)).toStrictEqual(JSON.stringify(files))
	})
})
