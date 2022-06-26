class Cat {
    constructor(nameCat, userName,adres, phone, type, food, gender, comment ) {
        this.nameCat =  nameCat;
        this.userName = userName;  
        this.adres = adres;
        this.phone = phone;
        this.type = type;  
        this.food = food; 
        this.gender = gender;
        this.comment = comment

    }

} 

const nameCatField = document.getElementById("nameCat");
const userNameField = document.getElementById("userName");
const adresField = document.getElementById("contact");
const phoneField = document.getElementById("phone");
const typeField = document.getElementById("type");
const foodField = document.getElementsByClassName(".food");
const genderField = document.getElementsByName("sex");
const commentField = document.getElementById("comment");


button.addEventListener("onc", () => {
    console.log(new Cat(nameCatField.value,
    userNameField.value,
    adresField.value,
    phoneField.value, 
    typeField.value, 
    foodField.value, 
    genderField.value, 
    commentField.value
    ))
})

