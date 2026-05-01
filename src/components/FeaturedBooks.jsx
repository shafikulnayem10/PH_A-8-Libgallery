import BookCard from "./BookCard";

const FeaturedBooks = async () => {
    
    const res = await fetch('https://ph-a-8-libgallery.vercel.app/data.json', {
        
    });
    const books = await res.json();
    
   
    const featured = books.slice(0, 4);

    return (
        <div className="py-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
                    <p className="text-gray-500 mt-2">Handpicked top reads for this week.</p>
                </div>
            
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featured.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;