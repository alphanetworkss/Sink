export default defineAppConfig({
  title: 'link',
  email: 'link.dlterabox.site@miantiao.me',
  github: 'https://github.com/ccbikai/link',
  twitter: 'https://link.dlterabox.site/link',
  telegram: 'https://link.dlterabox.site/telegram',
  mastodon: 'https://link.dlterabox.site/mastodon',
  blog: 'https://link.dlterabox.site/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://link.dlterabox.site/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
