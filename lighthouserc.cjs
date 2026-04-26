const base = process.env.BASE_URL || '';

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'pnpm astro preview',
      url: [
        `http://localhost:4321${base}/en/`,
        `http://localhost:4321${base}/en/resume/`,
        `http://localhost:4321${base}/en/work/`,
        `http://localhost:4321${base}/en/faq/`,
        `http://localhost:4321${base}/en/thought/`,
      ].map((url) => url.replace(/([^:])\/\//g, '$1/')),
    },
    upload: {
      target: 'temporary-public-storage',
      // target: 'lhci',
      // serverBaseUrl: process.env.PUBLIC_LHCI_BASE_URL,
      // token: process.env.LHCI_TOKEN,
    },
  },
};
