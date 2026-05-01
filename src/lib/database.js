export async function getAllBooks() {
  const res = await fetch('http://localhost:3000/data.json', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}


export async function getCategories() {

  const res = await fetch('http://localhost:3000/category.json', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}