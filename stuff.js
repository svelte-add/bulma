export const extension = "scss";
export const bulmaImports = `
\n/* restore default behaviour */
$body-overflow-y: auto;

/* Import only what you need from Bulma */
@import "../node_modules/bulma/sass/utilities/_all";
@import "../node_modules/bulma/sass/base/_all";
@import "../node_modules/bulma/sass/elements/_all";
@import "../node_modules/bulma/sass/form/_all";
@import "../node_modules/bulma/sass/components/_all";
@import "../node_modules/bulma/sass/grid/_all";
@import "../node_modules/bulma/sass/helpers/_all";
@import "../node_modules/bulma/sass/layout/_all"`;
// Note: do note add a trailing semicolon after the last import,
// as postcss will remove the last one and then the detection algorithm will fail.
