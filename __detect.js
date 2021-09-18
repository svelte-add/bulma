import { bulmaImports } from "./stuff.js";

// Note: This adder depends on the scss adder, which has it's own detector.
// So we only need to check the additional changes made with the bulma adder

/** @type {import("../..").Heuristic[]} */
export const heuristics = [
	{
		description: "`bulma` is installed",
		async detector({ folderInfo }) {
			return "bulma" in folderInfo.allDependencies;
		},
	},
	{
		description: "`bulma` imports where added to `src/app.scss`",
		async detector({ readFile }) {
			const scss = await readFile({ path: "/src/app.scss" });

			return scss.text.includes(bulmaImports);
		},
	},
];
