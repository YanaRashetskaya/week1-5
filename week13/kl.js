
function showplus() {
    const a = prompt("Первое число?");
    const b = prompt("Второе число?");
    alert(+a + +b); 
}

function showminus() {
    const a = prompt("Первое число?");
    const b = prompt("Второе число?");
    alert(a - b); 
}

function showtimes() {
    const a = prompt("Первое число?");
    const b = prompt("Второе число?");
    alert(a * b); 
}

function showdivide() {
    const a = prompt("Первое число?");
    const b = prompt("Второе число?");
    if (b == 0) {
        alert ('На ноль делить нельзя!');
}
else {
    alert (a/b);
}
}
