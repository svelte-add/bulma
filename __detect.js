import { extension } from "../scss/stuff.js";

/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`bulma` is installed",
		async detector({ folderInfo }) {
			return "bulma" in folderInfo.allDependencies;
		},
	},
	{
		description: `some \`bulma\` files are imported in \`src/app.${extension}\``,
		async detector({ readFile }) {
			const { text } = await readFile({ path: `/src/app.${extension}` });
			return text.includes("bulma");
		},
	},
];
