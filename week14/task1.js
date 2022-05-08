/*function clickMe() 
{
    let nameCatImput = document.getElementById('nameCat');
    console.log(nameCatImput.value);
}
function cheangeMe()
{
    let photoCat = document.getElementById ('photoCat');
    photoCat.src="https://scientificrussia.ru/images/b/teb-full.jpg";
}


function selekt(sender){
   sender.classList.add('selekted')
}
function sum (a,b){
    let result = a + b;
    return result;
}
console.log (sum (28, "55"));

let h1=document.getElementsByTagName ("h1");

let agetable = document.getElementById ("age-table");

let label = document.getElementsByTagName('label');
console.log(label);

let  search = document.getElementsByName ("search");
console.log(search);*/

// Задание 1
function clickMe() 
{
    let yourNameImput = document.getElementById('yourName').value;
    document.getElementById('result').innerHTML = `Привет, ${yourNameImput}!`;
}

// Задание 2
function select(sender) {
    sender.classList.add('selected');
}

//Задание 3
let photoNature2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg";
let photoNature3 = "https://natworld.info/wp-content/uploads/2019/07/Prirodnye-jekosistemy.jpg";
let photoNature4 = "https://s9.travelask.ru/system/images/files/000/336/892/wysiwyg_jpg/10452canada-landscape-map-wallpaper-3.jpg?1502197579";

let photoNature = document.getElementById ('photoNature');

photoNature.addEventListener ("click", () => { 
    const image = photoNature.style.backgroundImage;
    if (image === photoNature) {
        photoNature.style.backgroundImage = photoNature2;
    }
    if (image === photoNature2) {
        photoNature.style.backgroundImage = photoNature3;
    }
    if (image === photoNature3) {
        photoNature.style.backgroundImage = photoNature4;
    }
});

