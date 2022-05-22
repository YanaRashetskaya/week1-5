//Задание 3.1
let views = ['js', 'css', 'html'];

alert( views[0] ); 

//Задание 3.2
const numbers = [0, 1, false, 2, undefined, '', 3, null];

function filterFalse(arr) {
    return arr.filter(function(v) { return !!v; });
}

alert(filterFalse(numbers));

//Задание 4
const nambers = [[1,2], [1,2,3], [1,2,3,4]];
const el = nambers.findIndex(el=>el.length>3)
alert(el)