
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/allbooks"],
      disallow: ["/profile", "/login", "/register", "/api"],
    },
    sitemap: "https://ph-a-8-libgallery.vercel.app/sitemap.xml",
  };
}