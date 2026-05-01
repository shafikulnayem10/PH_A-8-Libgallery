export async function getAllBooks() {
  const res = await fetch('https://ph-a-8-libgallery.vercel.app/data.json', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function getCategories() {
  const res = await fetch('https://ph-a-8-libgallery.vercel.app/category.json', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}


export async function getBookDetailsById(id) {
  const books = await getAllBooks();
 
  const book = books.find((p) => p.id == id);
  return book;
}