const myLibrary = [];

function Book({ author, title, pages, read }) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book({
        author: author,
        title: title, 
        pages: pages,
        read: read
    })
    myLibrary.push(newBook)
    return newBook
}

addBookToLibrary('Test Author', 'test book', 600, false)

console.log(myLibrary)