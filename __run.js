import { parse } from "postcss";
import { extension, bulmaImports } from "./stuff.js";

/** @type {import("../../index.js").AdderRun<import("./__metadata.js").Options>} */
export const run = async ({ install, updateCss }) => {
	await updateCss({
		path: `/src/app.${extension}`,
		async style({ postcss }) {
			const text = bulmaImports;
			const node = parse(text);
			postcss.append(node);

			return {
				postcss,
			};
		},
	});

	await install({ package: "bulma" });
};
