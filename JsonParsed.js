const books =[
    '{"author": "John", "title": "progamming", "publishedYear": 1950, "price": 40.99}',
    '{"author": "Jane", "title": "javascript", "SpublishedYear": 2010, "price": 30.99}'
]
try {
    const parsedBooks = books.map((book)=> JSON.parse (book));
     const before1960 = parsedBooks.filter((book) => book.publishedYear<=1960);
     const totalPrice = parsedBooks.reduce((total, book) => total + book.price, 0);
     console.log("Total price", totalPrice);
     console.log("before 1960", before1960);
     parsedBooks.sort((book1, book2) => book1.price -book2.price);
     console.log(parsedBooks);
     
    } catch (error){
        console.log("Error happend during books json conversion", error);
    }
