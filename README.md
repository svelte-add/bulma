<h1 align="center">📗 Add Bulma to Svelte</h1>

This is an adder for `svelte-add`; you should [read its `README`](https://github.com/svelte-add/svelte-add#readme) before continuing here.

## ➕ Adding Bulma

This adder's codename is `bulma`, and can be used like so:

```sh
npx svelte-add@latest bulma
```

### 🏞 Supported environments

This adder supports SvelteKit and Vite-powered Svelte apps (all the environments `svelte-add` currently supports).

### ⚙️ Options

This adder doesn't take any options of its own.

## 🛠 Using Bulma

After the adder runs,

- You can use Bulma utility classes like `is-primary` or `mb-3` in the markup (components, routes).

- You can modify your design in `src/app.scss` and in example add `$body-background-color: blue;` above the import statements. Make sure to also check out [Bulma Docs](https://bulma.io/documentation/customize/variables/) for all configuration options!

- You can apply _another_ [Svelte Adder](https://github.com/svelte-add/svelte-adders) to your project for more functionality.
