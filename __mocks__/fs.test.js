'use strict'

jest.mock('fs');

describe( 'This test for itself test', () => {
	describe( 'This test is for readdir(path) ', () => {
		test('setup test', async () => {
			const dir = [
				{
					name: "pages",
					children: [
						{
							name: "hello.html",
							children: []
						},
						{
							name: "index.html",
							children: []
						}
					]
				}
			]
			require('fs').__setMockFiles(dir)
			const files = await require('fs').readdir("pages")
			const ans = ["hello.html", "index.html"]

			expect(files).toStrictEqual(ans)
		})
