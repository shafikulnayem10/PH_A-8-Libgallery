export default async function sitemap() {
 
  let books = [];
  
  try {
    const res = await fetch('http://localhost:3000/data.json');
    if (res.ok) {
      books = await res.json();
    }
  } catch (error) {
    console.error("Sitemap: Failed to fetch books", error);
  }

  const bookUrls = books.map((book) => ({
    url: `http://localhost:3000/allbooks/${book.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "http://localhost:3000",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "http://localhost:3000/allbooks",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...bookUrls,
  ];
}