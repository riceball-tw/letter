<div align="center">
  <img alt="logo" src="./public/assets/global/logo.svg#gh-light-mode-only" width="70" />
  <img alt="logo" src="./public/assets/global/logo-light.svg#gh-dark-mode-only" width="70" />
</div>
<h1 align="center">
  Letter Portfolio
</h1>

<div align="center">
  Personal portfolio that is built for digital creatives
</div>

<br />

![Letter Theme Preview](./public/assets/global/preview.jpg)

Start your online [resume](https://riceball-tw.github.io/letter/en/resume/) or [projects](https://riceball-tw.github.io/letter/en/work/) or even [FAQ](https://riceball-tw.github.io/letter/en/faq/) through fully typed markdown and settings. Check out the [Demo](https://riceball-tw.github.io/letter/en/), hosted on GitHub Pages.
  
## Key Features

- Astro v6 + Tailwind v4
- Optimize for speed (100% lighthouse score)
- Responsive & SEO-friendly
- Built-in i18n
- CI pipeline (ESLint + Prettier + TS Typecheck + Lighthouse)
- CD pipeline ([Cloudflare Pages](https://pages.cloudflare.com/) or [GitHub Pages](https://pages.github.com/))

## Getting Started

### Development

```bash
# 1. Clone the repository
git clone https://github.com/riceball-tw/letter.git .

# 2. Install dependencies
pnpm install

# 3. Run development server
pnpm run dev
```

## Customization

1. `astro.config.mjs`: Astro configs
    - `site`: Your final, deployed URL
2. `/src/content`: Site config, projects, resume and faq content
3. `/src/i18n`: Translation used in astro templates
4. `/public`: Assets used in the site (logo.svg, favicon...)
5. `/src/styles/global.css`: Styles
6. `/.github/workflows/deploy-pipeline.yml`: GitHub CI/CD pipeline (You should setup env below)
    - `LHCI_GITHUB_APP_TOKEN`, `LHCI_TOKEN`: For lighthouse and GitHub integration
    - `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`: For Cloudflare Wrangler CD Pipeline.
    - `BASE_URL`: Prefix for every link and assets in website (Useful for GitHub Pages deployment that has no custom domain)

### Build

```bash
# 1. Deploy the contents of the `./dist` folder wherever you like.
pnpm install
pnpm build
pnpm preview

# 2. Deploy docker container wherever you like.
docker build -t <your-astro-image-name> .
docker run -p <local-port>:<container-port> <your-astro-image-name>
```

## Helping out

For questions or support, please open an issue on GitHub.

## License

MIT
