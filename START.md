Start locally

This is a static site. The easiest way to preview it locally is to serve the `source` folder over a simple static file server.

Recommended quick options (run from the repository root):

- Python 3 (no install required on most systems):

```bash
cd source
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

- Node (if you have npm) — using `http-server`:

```bash
npm install -g http-server
cd source
http-server -p 8000
# then open http://localhost:8000
```

- Node (if you have npm) — using `serve`:

```bash
npm install -g serve
cd source
serve -l 8000
# then open http://localhost:8000
```

- VS Code: install the "Live Server" extension and open the `source` folder, then click "Go Live".

- Netlify CLI (if you want a local environment that matches Netlify's behavior):

```bash
npm install -g netlify-cli
cd source
netlify dev
# opens a local dev server and provides a URL
```

Verification: open the browser to http://localhost:8000 (or the URL shown by the tool). The app's entrypoint is `source/index.html` and the site expects to be served from the `source` directory so that paths like `css/main.css`, `js/navigation.js`, and `components/header.html` resolve correctly.

If you'd like, I can add a tiny `package.json` with a "start" script, or create a Makefile / npm script to run one of the above commands. Tell me which option you prefer.
