module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6b986fa59ce640199b74e3a8bc9e79b5',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ayush Dhingra',
  domain: 'ayushdhingra.ml',
  author: 'Ayush Dhingra',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Ayush Dhingra',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'ayush_dhingra_',
  github: 'adayush',
  linkedin: 'ayush-dhingra',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/resume': '6ae868a592034e0eb51e356996da8c78',
    '/blogs': 'fbd25f13642443179c8186b3ee0bf15c',
    '/projects':'ab5b73392bea42358435de8beb42a6f9',
    '/murals':'e607f9118e9d401c8d60ae69ab30e809',
    '/reading':'6e40581e0d2540d6858a5c19a6fcf8d4',
  }
}
