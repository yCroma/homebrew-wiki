'use strict'

const readfile = require('./readfile')

jest.mock("fs/promises")

describe('readfile test', () => {
	beforeEach(() => {
		const dir = [
			{
				name: "pages",
				children: [
					{
						name: "index.html"
					},
					{
						name: "utils",
						children: [
							{
								name: "file1.html",
							},
							{
								name: "file2.html"
							}
						]
					},
					{
						name: 'nested',
						children: [
							{
								name: "dir1",
								children: [
									{
										name: "file1-1.html"
									},
									{
										name: "file1-2.html"
									}
								]
							},
							{
								name: "dir2",
								children: [
									{
										name: "file2-1.html"
									},
									{
										name: "file2-2.html"
									}
								]
							}
						]
					},
					{
						name: "dirfile",
						children: [
							{
								name: "dir1",
								children: [
									{
										name: "file1-1.html"
									},
									{
										name: "file1-2.html"
									}
								]
							},
							{
								name: "index.html"
							}
						]
					}
				]
			}
		]
		require("fs/promises").__setMockFiles(dir)
	})
	test('give file path', async() => {
		const files = await readfile("index.html", "pages", "pages")
		const ans = {
			name: "index.html",
			path: "/index.html",
			children: []
		}
		expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
	})

	test('give dirpath', async() => {
		const files = await readfile("nested", "pages", "pages")
		const ans = {
			name: "nested",
			path: "/nested/",
			children: [
				{
					name: "dir1",
					path: "/nested/dir1/",
					children: [
						{
							name: "file1-1.html",
							path: "/nested/dir1/file1-1.html",
							children: []
						},
						{
							name: "file1-2.html",
							path: "/nested/dir1/file1-2.html",
							children: []
						}
					]
				},
				{
					name: "dir2",
					path: "/nested/dir2/",
					children: [
						{
							name: "file2-1.html",
							path: "/nested/dir2/file2-1.html",
							children: []
						},
						{
							name: "file2-2.html",
							path: "/nested/dir2/file2-2.html",
							children: []
						}
					]
				}
			]
		}
		expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
	})

	test('give dir and file', async() => {
		const files = await readfile("dirfile", "pages", "pages")
		const ans = {
			name: "dirfile",
			path: "/dirfile/",
			children: [
				{
					name: "dir1",
					path: "/dirfile/dir1/",
					children: [
						{
							name: "file1-1.html",
							path: "/dirfile/dir1/file1-1.html",
							children: []
						},
						{
							name: "file1-2.html",
							path: "/dirfile/dir1/file1-2.html",
							children: []
						}
					]
				},
				{
					name: "index.html",
					path: "/dirfile/index.html",
					children: []
				}
			]
		}
		expect(JSON.stringify(files)).toStrictEqual(JSON.stringify(ans))
	})
})
