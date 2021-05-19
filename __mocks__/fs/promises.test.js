'use strict'

jest.mock('fs/promises');

/*
 * meaning of propaties
 * name: filename
 * children: children length. files return 0 and directories return a number for the number of it has
 * isDirectory: 
 */
describe( 'This test for itself test', () => {
	describe ( 'fs.lstat test', () => {
		beforeEach(() => {
			const dir = [
				{
					name: "pages",
					children: [
						{
							name: "index.html",
							children: []
						},
						{
							name: "utils",
							children: [
								{
									name: "fs.js",
									children: []
								},
								{
									name: "http.js",
									children: []
								}
							]
						},
						{
							name: "has1file",
							children: [
								{
									name: "1file"
								}
							]
						}
					]
				}
			]
			require('fs/promises').__setMockFiles(dir)
		})
		test('nested file true', async () => {
			const fullpath = "pages/index.html"
			const lstat = await require('fs/promises').lstat(fullpath)
			expect(lstat.isFile()).toBe(true)
		})

		test('nested file false', async () => {
			const fullpath = "pages/utils"
			const lstat = await require('fs/promises').lstat(fullpath)
			expect(lstat.isFile()).toBe(false)
		})

		test('nested dir true', async () => {
			const fullpath = "pages/utils"
			const lstat = await require('fs/promises').lstat(fullpath)
			expect(lstat.isDirectory()).toBe(true)
		})

		test('nested dir false', async () => {
			const fullpath = "pages/utils"
			const lstat = await require('fs/promises').lstat(fullpath)
			expect(lstat.isFile()).toBe(false)
		})

		describe('test has1file', () => {
			test('has1file is dir', async() => {
				const fullpath = "pages/has1file"
				const lstat = await require('fs/promises').lstat(fullpath)
				expect(lstat.isDirectory()).toBe(true)
			})

			test('has1file isnot file', async() => {
				const fullpath = "pages/has1file"
				const lstat = await require('fs/promises').lstat(fullpath)
				expect(lstat.isFile()).toBe(false)
			})
		})

	})

	describe ( 'fs.readdir test', () => {
		// TODO: file2dirent(file), access2children(path)のテスト
		describe( 'This test is for readdir(path) ', () => {
			test('setup test', async () => {
				const dir = [
					{
						name: "pages",
						children: [
							{
								name: "hello.html",
							},
							{
								name: "index.html",
							}
						]
					}
				]
				require('fs/promises').__setMockFiles(dir)
				const files = await require('fs/promises').readdir("pages")
				const ans = ["hello.html", "index.html"]

				expect(ans).toStrictEqual(files)
			})
			test('find child file', async () => {
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
										name: "index.html",
									},
									{
										name: "index.js",
									}
								]
							}
						]
					}
				]
				require('fs/promises').__setMockFiles(dir)
				const path = "pages/utils"
				const files = await require('fs/promises').readdir("pages/utils")
				const ans = ["index.html", "index.js"]
				expect(files).toStrictEqual(ans)
			})
		})
		describe( 'This test if for readdir(path, {withFileTypes: true})', () => {
			// children is needed to determine if the JSON is a directory.
			test('read only files', async() => {
				const dir = [
					{
						name: "pages",
						children: [
							{
								name: "file1.html",
							},
							{
								name: "file2.html",
							},
							{
								name: "index.html",
							}
						]
					}
				]
				require("fs/promises").__setMockFiles(dir)
				const files = await require('fs/promises').readdir("pages", { withFileTypes: true})
				const ans = [
					{
						name: "file1.html",
						children: 0
					},
					{
						name: "file2.html",
						children: 0
					},
					{
						name: "index.html",
						children: 0
					},
				]
				ans.forEach( json => {
					json.isDirectory = () => {
						return file.children.length ? true : false
					}
				})
				expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
			})

			test('get directory', async() => {
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
										name: "index.js",
									},
									{
										name: "path.js",
									}
								]
							}
						]
					}
				]
				require("fs/promises").__setMockFiles(dir)
				const files = await require('fs/promises').readdir("pages", { withFileTypes: true})
				const ans = [
					{
						name: "index.html",
						children: 0
					},
					{
						name: "utils",
						children: 2
					}
				]
				ans.forEach( json => {
					json.isDirectory = () => {
						return dirent.children ? true : false
					}
				})
				expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
			})

			test('read nested path', async() => {
				// the path is pages/utils
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
										name: "file1",
										children: []
									},
									{
										name: "index.html",
										children: []
									}
								]
							}
						]
					}
				]
				require("fs/promises").__setMockFiles(dir)
				const files = await require('fs/promises').readdir("pages/utils", { withFileTypes: true})
				const ans = [
					{
						name: "file1",
						children: 0
					},
					{
						name: "index.html",
						children: 0
					}
				]
				ans.forEach( json => {
					json.isDirectory = () => {
						return dirent.children ? true : false
					}
				})
				expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
			})
		})
	})
})
