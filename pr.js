let json = `[{
    "title": "bbbb",
    "genre": "hhhhh",
    "author": "GGGG"
},
{
    "title": "bbbb",
    "genre": "hhhhh",
    "author": "GGGG",
    "image": "https://lt3.pigugroup.eu/uploaded/shutterstock_509582812-min.jpg"
},
{
    "title": "bbbb",
    "genre": "hhhhh",
    "author": "GGGG"
}
]`;
document.addEventListener ( "DOMContentLoaded", function 
(event) {
    let books = JSON.parse (json);
    console.log(books);
    let booksContent = "";
    for (let book of books)
    {
        booksContent += `<div class='gero'> 
        <h2> ${book.title}) </h2>
        <div> Вселенная: ${book.genre} </div>
        <div> Альтер эго:  ${book.author} </div>
        <div> Изображение:  ${book.image} </div>
        </div>`
    }
    document.getElementById("geroContainer").innerHTML =  booksContent;
});