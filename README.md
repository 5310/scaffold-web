# `scaffold-web`

This is a _personal_ project scaffold pushed to GitHub for convenience.

This scaffold sets up a web project based on my maximalist preferences. It uses Yarn, Gulp, ESLint, StyleLint, Pug, PostCSS, Babel, Rollup, TernJS, PureScript, and even a static test server with SSL.

The configurations are unconventional, and are subject to change anytime. So, if you're still reading this, stop!

Notes:
- There's a `.hidden` file included!
- `package.json` scripts:
  - `build`: Compiles `src` to `dist`.
  - `watch`: Watches for changes and rebuilds.
  - `serve`: Serves `dist` using `serve` and `localtunnel`.
  - `dev`: Builds, watches, and serves.
  - `gh-pages`: Deploys [`dist` to `gh-pages`](https://gist.github.com/cobyism/4730490)
  - `install-psc-package-linux`: Locally installs `psc-package` on Linux.
    - No dice for other platforms for now.
