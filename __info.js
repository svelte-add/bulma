import { extension } from "../scss/stuff.js";

export const name = "Bulma";

export const emoji = "📗";

export const usageMarkdown = ["You can use Bulma classes like `is-primary` or `mb-3` in the markup (components, routes, `app.html`).", "You can [customize your Bulma theme with variables](https://bulma.io/documentation/customize/variables/) like `$success` or `$body-background-color` in `src/variables.scss`."];

/** @type {import("../..").Gatekeep} */
export const gatekeep = async () => {
	return { able: true };
};

/** @typedef {{}} Options */

/** @type {import("../..").AdderOptions<Options>} */
export const options = {};

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
