export default async function sitemap() {
 
  let books = [];
  
  try {
    const res = await fetch('https://ph-a-8-libgallery.vercel.app/data.json');
    if (res.ok) {
      books = await res.json();
    }
  } catch (error) {
    console.error("Sitemap: Failed to fetch books", error);
  }

  const bookUrls = books.map((book) => ({
    url: `https://ph-a-8-libgallery.vercel.app/allbooks/${book.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://ph-a-8-libgallery.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://ph-a-8-libgallery.vercel.app/allbooks",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...bookUrls,
  ];
}