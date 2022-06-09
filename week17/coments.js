let comments = [];

function addElement() {
    const yourComents = document.getElementById('yourComents').value;
    const commentary = checkSpam (yourComents);
    comments.push(commentary);
    let newDiv = "";

    for (let comment of comments) {
    newDiv += `<div type='text' class='form-control m-2'>${comment}</div>`;
    }

    document.getElementById("newComents")
    .innerHTML = newDiv;
};

    let comment = ['viagra, xxxx'];
    
    function checkSpam(comment) {
        return comment.replace(/viagra|xxxx/ig, "******")
    };