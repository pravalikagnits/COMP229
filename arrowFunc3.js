const author = {
    fullName: "Bob Alice",
    books: ["book1 ", "book2 "],
    printBooks() {
        this.books.forEach(book => console.log(book + 'by ' +
            this.fullName));
    }
};

author.printBooks();
