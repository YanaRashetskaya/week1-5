let comments = [];


let newComentsDiv = document.getElementById("newComents");
    
const comentsValue = document.getElementById('yourComents');
let auhtor = document.getElementById("auhtor");


function addElement() {

    const yourComents = comentsValue.value;z
    const commentary = checkSpam (yourComents);

    comments.push(commentary);

    let newDiv = "";

    for (let comment of comments) {
    newDiv += `<div type='text' class='form-control m-2'>${comment}</div>`;
    }

    newComentsDiv.innerHTML = newDiv;
    
};

    let comment = ['viagra, xxxx'];
    
    function checkSpam(comment) {
        return comment.replace(/viagra|xxxx/ig, "******")
    };