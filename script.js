function Book(title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
}

const book1 = new Book("1","a",";");
const book2 = new Book("2","b",".");

let myLibrary = [book1, book2];
function show(){            
    var result = "";
    myLibrary.forEach(book => {
        result = "";
        result += "<td>"+ book.title + "</td>";
        result += "<td>"+ book.author + "</td>";
        result += "<td>"+ book.genre + "</td>";
        document.getElementById("table").appendChild(document.createElement("tr")).innerHTML = result;
    });
}
function addBook(event){
    event.preventDefault();
    let title = document.querySelectorAll(".title")[0].value;
    let author = document.querySelectorAll(".author")[0].value;
    let genre = document.querySelectorAll(".genre")[0].value;
    let newBook = new Book(title,author,genre);
    myLibrary.push(newBook);
    update();
}
function update(){
    document.getElementById("table").innerHTML = 
        `<tr>
            <td>Title</td>
            <td>Author</td>
            <td>Genre</td>
        </tr>`;
    show();
}
let addButton = document.querySelector(".btn-add");
addButton.addEventListener("click", addBook);
show();
