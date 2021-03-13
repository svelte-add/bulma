import { Preset, color } from "apply";

Preset.setName("svelte-add/bulma");

// add dependencies to package.json
Preset.editJson("package.json")
    .merge({
        devDependencies: {
            bulma: "^0.9.2",
            sass: "^1.32.7",
            "svelte-preprocess": "^4.6.9",
        },
    })
    .withTitle("Adding needed dependencies");

// extract all necessary files
Preset.extract("files").withTitle("Adding Bulma files");

// add svelte preprocess to svelte.config.js
// source: https://github.com/svelte-add/postcss/blob/f2d4129b617d31cde3d71c7652500e83b90f5674/preset.ts#L85-L101
const newPreprocessor = `sveltePreprocess()`;
const addPreprocessor = (otherPreprocessors) => `preprocess: [
\t\t${newPreprocessor},
\t${otherPreprocessors}]`;

Preset.edit(["svelte.config.cjs"])
    .update((content) => {
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
    })
    .withTitle("Setting up Svelte preprocessor");

// add demo files if requested by the user
var DEMO_PROMPT_KEY = "demo";
Preset.confirm(DEMO_PROMPT_KEY, "Add Bulma Demo?", false);
Preset.extract("demo-files").withTitle("Adding Bulma demo files").ifPrompt(DEMO_PROMPT_KEY);
Preset.edit(["src/routes/index.svelte"])
    .update((match) => {
        let result = match;
        result = result.replace(`<main>`, `<main>\n\t<a href="/bulma-demo" class="button is-primary">goto demo page</a>`);
        return result;
    })
    .ifPrompt(DEMO_PROMPT_KEY);

// update dependencies
Preset.installDependencies().ifUserApproves();

// give some starting help
Preset.instruct([
    `You can now run your dev server to have a look.`,
    `Don't forget to take a look at  to further configure your design.`,
    `There you can in example put something like about ${color.magenta("$body-background-color: blue;")} above the import statements.`,
    `Make sure to check out ${color.magenta("https://bulma.io/documentation/customize/variables/")} for all configuration options!`,
]).withHeading("What's next?");
