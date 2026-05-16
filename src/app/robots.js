
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/allbooks"],
      disallow: ["/profile", "/login", "/register", "/api"],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}