Deployment options

This project is ready to be deployed. Choose one of the options below.

1) GitHub Pages (automatic via GitHub Actions)

- Create a GitHub repository and push this project to it (replace `origin` URL with your repo):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

- The included GitHub Action (`.github/workflows/deploy.yml`) will build the site and publish the `dist/` folder to the `gh-pages` branch on pushes to `main`.
- In your repository settings -> Pages, set the source to `gh-pages` branch (if needed). The action uses the `GITHUB_TOKEN` so no extra secret is required.

2) Vercel (recommended for frictionless previews and global CDN)

- Install the Vercel CLI or connect your GitHub repo via vercel.com.
- Vercel detects Vite + React; set build command: `npm run build` and output directory: `dist`.
- Connect your custom domain and enable automatic HTTPS.

3) Netlify

- Connect your Git repository to Netlify and set build command: `npm run build` and publish directory: `dist`.
- Or install Netlify CLI and run `netlify deploy --dir=dist --prod` after building.

Domain & SSL

- Point your domain's A/ALIAS records to your hosting provider (Netlify/Vercel provide exact instructions).
- Enable HTTPS in the hosting dashboard. For GitHub Pages, configure an A record and enable "Enforce HTTPS" in Pages settings (GitHub provisions TLS automatically for many domains).

Security notes

- Enforce HTTPS at the hosting provider and use HSTS headers if your host allows custom headers.
- Consider adding a small `security.txt` and robot rules if needed.

Optional: Direct `gh-pages` deploy locally

```bash
npm ci
npm run deploy
```

This uses the `gh-pages` package to push `dist/` directly to the `gh-pages` branch. It requires that you have push access to the repository and a remote `origin` configured.
