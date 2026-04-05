
# [Letter](https://weweweb.pages.dev/en) - Astro Portfolio Theme

> Compose Your Digital Story, Letter by Letter

![Letter Theme Demo](https://bucket-wei.webdong.dev/readme/letter-readme.jpg)

**Letter** is a simple opinionated theme designed for developers and digital creatives, focus on simplicity and easy to use. Share your [online resume](https://weweweb.pages.dev/en/resume/) or [portfolio](https://weweweb.pages.dev/en/work/) even [FAQ](https://weweweb.pages.dev/en/faq/) through fully typed markdown. Since I am a frontend developer, why not create a portfolio website myself? 

- [Let's Build a Personal Frontend Portfolio - Preparation](https://www.webdong.dev/en/post/lets-build-a-portfolio/)
- [Let's Building a Frontend Portfolio using Astro.js](https://www.webdong.dev/en/post/lets-build-a-portfolio-with-astro/)
  
## Key Features

- Astro v6 + Tailwind v4
- Built-in i18n
- CI pipeline (ESLint + Prettier + TS Typecheck + Lighthouse)
- CD pipeline ([Cloudflare Pages](https://pages.cloudflare.com/))

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

## Customization

1. **Global Configs**: Edit the template's config file [`src/utility/config.ts`](https://github.com/riceball-tw/letter/blob/main/src/utility/config.ts).
2. **Styles**: Edit the [`src/styles/global.css`](https://github.com/riceball-tw/letter/blob/main/src/styles/global.css) file. This file uses Tailwind CSS and CSS variables to customize the colors of the theme.
3. **Page content**: Replace page content and layout for your liking. Like [homepage](https://github.com/riceball-tw/letter/blob/main/src/pages/%5Blanguage%5D/index.astro) .
4. **i18n content**: Every i18n config and text will store in [i18n folder](https://github.com/riceball-tw/letter/tree/main/src/i18n).
5. **CI/CD env**: 
  - `LHCI_GITHUB_APP_TOKEN`, `LHCI_TOKEN` - For lighthouse and GitHub integration
    - [Chcek Website Performance with Lighthouse CI in 3 Steps](https://www.webdong.dev/en/post/check-website-performance-with-lighthouse-ci/)
    - [Monitor Website Performance by Self-Host Lighthouse Server](https://www.webdong.dev/en/post/build-a-personal-lighthouse-server/)
  - `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` - For Cloudflare Wrangler CD Pipeline.

## Helping out

For questions or support, please open an issue on GitHub.

## License

The source code in this repository is licensed under the MIT License.
Non-code content (e.g., images, articles, documentation) is copyrighted and all rights are reserved.
