//library array to hold book object
let library =[];
//Book class with properties and getSummary method
 class Book{
   constructor (title,author,yearPublished){

this.title = title;
this.author = author;
this.yearPublished = yearPublished;
   }
    getSummary(){
return `
    ${this.title}, Author:
    ${this.author}, Year:
    ${this.yearPublished};`
    }}


// function to add book to the library
function addBook(title, author , yearPublished) {
    const newBook =new Book(title, author, yearPublished);
    library.push(newBook);
    console.log( `Book added: ${newBook.getSummary()}`);
    

}
//Add books to the library
addBook("malcom X", "Alex haley", "1964")
 addBook("The alchemist","paulo coelho","1988");
 addBook("Think and Grow rich", "Napoleon Hill", "1937");
 addBook("Awekening the Giants within","Tony Robbins", "1991");
    addBook("As a man Thinketh","James Allen","1903");
    addBook("Think Big","Ben Carson","1994")

    //view Library catalog
    function viewBook(){
        console.log("library catalog:");
        library.forEach((Book,index) => {
            console.log(`${index + 1}. 
             ${Book.getSummary()}`);
        });
    }
        


    //delete a book
    function deleteBook(title){
        const bookIndex =
        library.findIndex((book) => book.title === title);
    if(bookIndex !== -1) {
        library.splice(bookIndex, 1);
        console.log("Book deleted: ${title}");
    }
else{
    console.log("Book not found: $ {title}");
}
    }
   