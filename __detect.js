/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`bulma` is installed",
		async detector({ folderInfo }) {
			return "bulma" in folderInfo.allDependencies;
		},
	},
	{
		description: "some `bulma` files are imported in `src/app.scss`",
		async detector({ readFile }) {
			const { text } = await readFile({ path: "/src/app.scss" });
			return text.includes("bulma");
		},
	},
];
