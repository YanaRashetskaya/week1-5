let comments = [];


function addElement() {
    let textArea = document.getElementById('yourComents').value;
    comments.push(textArea);
    let newDiv = "";
    for (let comment of comments) {
    newDiv += `<div type='text' class='form-control m-2'>${comment}</div>`;
    }
    document.getElementById("newComents")
    .innerHTML = newDiv;
};


    let comment1 = 'buy ViAgRA now';
    let c = comment1.replace(/viagra/i, "******");
    alert(c);


/*
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    if (comments.value == "xxx") {
        str.replace(/xxx/i, "***");
    }
}*/