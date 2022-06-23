document.addEventListener("DOMContentLoaded", function (event) {
    let nameAuthor = localStorage.getItem('nameUser');
    if (nameAuthor!=null) {
        author.value = nameAuthor;
    }

    let photo = localStorage.getItem('Photo');
    if (photo!=null) {
        newPhotoLink.value = photo;
    }

    let yoorComent = localStorage.getItem('coment');
    yoorComent = JSON.parse(yoorComent);
    if (yoorComent!=null) {
        newComentsDiv.value = yoorComent;
    }

});

let comments = [];

const comentsValue = document.getElementById('yourComents');

const newComentsDiv = document.getElementById("newComents");

const author = document.getElementById("author");

const newPhotoLink = document.getElementById("yourphoto");

function addElement() {

    const yourComents = comentsValue.value;
    const commentary = checkSpam (yourComents);
    const name = author.value;
    const photolink = newPhotoLink.value;
    const myImg = document.createElement("img");
    myImg.src = photolink;
    
    comments.push(commentary);

    let newDiv = "";
    
    for (let comment of comments) {
    newDiv += `<div type='text' class='form-control m-2'><span>${photolink} </span><span>${name}:</span><span>${comment}</span></div>`;
    }

    newComentsDiv.innerHTML = newDiv;

    if(localStorage.getItem('nameUser')==null) {
        localStorage.setItem('nameUser', name);
    }

    if(localStorage.getItem('Photo')==null) {
        localStorage.setItem('Photo', photolink );
    }

    if(localStorage.getItem('coment')==null) {
        localStorage.setItem('coment', JSON.stringify(comments));
    }

};

    let comment = ['viagra, xxxx'];
    
    function checkSpam(comment) {
        return comment.replace(/viagra|xxxx/ig, "******")
    };