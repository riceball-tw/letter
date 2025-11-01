module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'pnpm astro preview',
      url: [
        'http://localhost:4321/en/',
        'http://localhost:4321/en/resume/',
        'http://localhost:4321/en/work/',
        'http://localhost:4321/en/faq/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
      // target: 'lhci',
      // serverBaseUrl: process.env.PUBLIC_LHCI_BASE_URL,
      // token: process.env.LHCI_TOKEN,
    },
  },
};
