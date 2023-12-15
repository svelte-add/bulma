import { AtRule, Comment, Declaration } from "postcss";
import { extension, stylesHint } from "../scss/stuff.js";

/** @type {import("../..").AdderRun<import("./__info.js").Options>} */
export const run = async ({ install, updateCss }) => {
	await updateCss({
		path: `/src/variables.${extension}`,
		async style({ postcss }) {
			postcss.append(
				new Comment({
					text: "https://github.com/jgthms/bulma/issues/1293",
				}),
			);
			postcss.append(
				new Declaration({
					prop: "$body-overflow-y",
					value: "auto",
				}),
			);

			return {
				postcss,
			};
		},
	});

	await updateCss({
		path: `/src/app.${extension}`,
		async style({ postcss }) {
			const imports = ["utilities", "base", "elements", "form", "components", "grid", "helpers", "layout"];
			imports.reverse();

			const [stylesHintComment] = postcss.nodes.filter((node) => node.type === "comment" && node.text === stylesHint);

			for (const import_ of imports) {
				const importAtRule = new AtRule({
					name: "import",
					params: `"bulma/sass/${import_}/_all"`,
				});
				if (stylesHintComment) {
					stylesHintComment.after(importAtRule);
				} else {
					postcss.prepend(importAtRule);
				}
			}
			const importHint = new Comment({
				text: "Import only what you need from Bulma",
			});
			if (stylesHintComment) {
				stylesHintComment.after(importHint);
			} else {
				postcss.prepend(importHint);
			}

			return {
				postcss,
			};
		},
	});

	await install({ package: "bulma" });
};
