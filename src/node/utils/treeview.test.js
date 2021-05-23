'use strict'

const treeview = require('./treeview')

jest.mock("fs/promises")

describe('treeview test', () => {
	beforeEach(() => {
		const dir = [
			{
				name: "fullpath",
				children: [
					{
						name: "fileonly",
						children: [
							{
								name: "file1.html"
							},
							{
								name: "file2.html"
							},
							{
								name: "file3.html"
							}
						]
					},
					{
						name: "somedir",
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
										name: "file2-1.html",
									},
									{
										name: "file2-2.html"
									}
								]
							}
						]
					},
					{
						name: "nested",
						children: [
							{
								name: "hierarchy",
								children: [
									{
										name: "lastdir",
										children: [
											{
												name: "lastfile"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
		require("fs/promises").__setMockFiles(dir)
	})

	test('test fileonly', async() => {
		const tree = await treeview("fullpath/fileonly", "fullpath/fileonly")
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

		expect(JSON.stringify(tree)).toStrictEqual(JSON.stringify(ans))
	})
	
	test('test somedir', async() => {
		const tree = await treeview("fullpath/somedir", "fullpath/somedir")
		const ans = [
			{
				name: "dir1",
				path: "/dir1/",
				children: [
					{
						name: "file1-1.html",
						path: "/dir1/file1-1.html",
						children: []
					},
					{
						name: "file1-2.html",
						path: "/dir1/file1-2.html",
						children: []
					}
				]
			},
			{
				name: "dir2",
				path: "/dir2/",
				children: [
					{
						name: "file2-1.html",
						path: "/dir2/file2-1.html",
						children: []
					},
					{
						name: "file2-2.html",
						path: "/dir2/file2-2.html",
						children: []
					}
				]
			}
		]
		expect(JSON.stringify(tree)).toStrictEqual(JSON.stringify(ans))
	})

	test('test nested', async() => {
		const tree = await treeview("fullpath/nested", "fullpath/nested")
		const ans = [
			{
				name: "hierarchy",
				path: "/hierarchy/",
				children: [
					{
						name: "lastdir",
						path: "/hierarchy/lastdir/",
						children: [
							{
								name: "lastfile",
								path: "/hierarchy/lastdir/lastfile",
								children: []
							}
						]
					}
				]
			}
		]
		expect(JSON.stringify(tree)).toStrictEqual(JSON.stringify(ans))
	})
})
