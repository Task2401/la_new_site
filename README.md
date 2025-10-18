# la_new_site
LA new site

## Deploying to Netlify

This project is a static site. To deploy on Netlify you have two simple options:

1) Publish the `sourse` folder directly (recommended, no build step):

	- In Netlify Sites -> "New site from Git" choose this repository.
	- Set the "Build command" to blank and the "Publish directory" to `sourse`.
	- (Optional) Netlify will use `netlify.toml` in the repo which already sets the publish directory to `sourse`.

2) Use a build step that copies `sourse` to a `dist` folder and publish `dist` instead.

If you need SPA-style routing (client-side navigation), `netlify.toml` includes a redirect rule to rewrite all paths to `/index.html`.

If you prefer I can also add a minimal `package.json` and a `build` script to produce a `dist` directory — tell me and I'll add it.

