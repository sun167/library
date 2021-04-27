let table = document.getElementById("table");
function Book(title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
}

let myLibrary = [];
function show(){            
    var result = "";
    let counter = 0;
    myLibrary.forEach(book => {
        result = 
        `<td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.genre} </td>
        <td><button type="submit">Delete</button></td>`;
        let newBook = document.createElement("tr");
        newBook.className = `${counter}`;
        table.appendChild(newBook).innerHTML = result;
        newBook.addEventListener("click",deleteBook);
        counter++;

    });
}
function addBook(event){
    event.preventDefault();
    let title = document.querySelectorAll(".title")[0].value;
    let author = document.querySelectorAll(".author")[0].value;
    let genre = document.querySelectorAll(".genre")[0].value;
    let newBook = new Book(title,author,genre);
    myLibrary.push(newBook);
    console.log(myLibrary);
    update();
}

function deleteBook(event){
    event.preventDefault();
    let reponse = window.confirm("Are you sure?");
    if (reponse) {
    table.removeChild(event.currentTarget);
    let bookToDelete = event.currentTarget.className;
    console.log(bookToDelete);
    console.log(event.currentTarget);
    myLibrary.splice(bookToDelete,1);
    update();
    }
}

function update(){
    document.getElementById("table").innerHTML = 
        `<tr>
            <td>Title</td>
            <td>Author</td>
            <td>Genre</td>
            <td></td>
        </tr>`;
    show();
}
let addButton = document.querySelector(".btn-add");
addButton.addEventListener("click", addBook);
show();
