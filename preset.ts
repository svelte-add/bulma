import { Preset, color } from "apply";

Preset.setName("svelte-add/bulma");

const EXCLUDE_EXAMPLES = "excludeExamples"
Preset.option(EXCLUDE_EXAMPLES, false);

Preset.editJson("package.json").merge({
	devDependencies: {
		bulma: "^0.9.2",
		sass: "^1.32.7",
		"svelte-preprocess": "^4.6.9",
	},
}).withTitle("Adding needed dependencies");

Preset.extract("files").withTitle("Adding Bulma files");

const newPreprocessor = `sveltePreprocess()`;
const addPreprocessor = (otherPreprocessors) => `preprocess: [
\t\t${newPreprocessor},
\t${otherPreprocessors}]`;

Preset.edit(["svelte.config.cjs"]).update((content) => {
	let result = content;

	const matchSveltePreprocess = /sveltePreprocess\((.*)\)/m;
	result = result.replace(matchSveltePreprocess, (_match, _oldOptions) => `[${newPreprocessor}]`);

	const matchPreprocessors = /preprocess:[\s\r\n]\[[\s\r\n]*((?:.|\r|\n)+)[\s\r\n]*\]/m;
	result = result.replace(matchPreprocessors, (_match, otherPreprocessors) => {
		if (otherPreprocessors.includes("sveltePreprocess")) return addPreprocessor("");
		return addPreprocessor(otherPreprocessors);
	});

	if (!result.includes("svelte-preprocess")) result = `const sveltePreprocess = require("svelte-preprocess");\n${result}`;
	if (!result.includes("sveltePreprocess(")) result = result.replace("module.exports = {", `module.exports = {\n\t${addPreprocessor("")},`);

	return result;
}).withTitle("Setting up Svelte preprocessor");

Preset.extract("demo-files").withTitle("Adding Bulma demo files").ifNotOption(EXCLUDE_EXAMPLES);
Preset.edit(["src/routes/index.svelte"]).update((match) => {
	let result = match;
	result = result.replace(`<main>`, `<main>\n\t<a href="/bulma-demo" class="button is-primary">goto demo page</a>`);
	return result;
}).ifNotOption(EXCLUDE_EXAMPLES);

Preset.instruct(`Run ${color.magenta("npm install")}, ${color.magenta("pnpm install")}, or ${color.magenta("yarn")} to install dependencies`);
