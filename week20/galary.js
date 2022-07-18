let json = `[{
    "title": "Бэтмен",
    "adres": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "photogero" : "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
    
}, {
    "title": "Супермен",
    "adres": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "photogero" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
    
}, {
    "title": "Железный человек",
    "adres": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "photogero" : "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
    
}, {
    "title": "Спайдер-мен/Человек-паук",
    "adres": "Marvel Comics",
    "alterego": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpower": " сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "photogero" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
    
}, {
    "title": "Капитан Америка",
    "adres": "Marvel Comics",
    "alterego": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "photogero" : "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
    
}, {
    "title": "Тор",
    "adres": "Marvel Comics",
    "alterego": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpower": "все, что может бог, плюс молот Мьелнир",
    "photogero" : "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"

}, {
    "title": "Халк",
    "adres": " Marvel Comics",
    "alterego": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
    "photogero" : "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
    
}, {
    "title": "Чудо-женщина",
    "adres": "DC Comics",
    "alterego": "Диана Принс",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
    "photogero" : "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
    
}, {
    "title": "Черная вдова",
    "adres": "Marvel Comics",
    "alterego": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "friends": "Мстители",
    "superpower": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "photogero" : "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
    
}, {
    "title": "Дэдпул",
    "adres": "Marvel Comics",
    "alterego": "Уэйд Уинстон Уилсон",
    "occupation": "антигерой, наемник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "photogero" : "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/1034x543_0xac120002_2692921231540468872.jpg"
}]`;

document.addEventListener ( "DOMContentLoaded", function 
(event) {
    let geros = JSON.parse (json);
    let gerosContent = "";
    for (let gero of geros)
    {
        gerosContent += `<div class='gero'> 
        <h2> ${gero.title}</h2>
        <div> Вселенная: ${gero.adres} </div>
        <div> Альтер эго:  ${gero.alterego} </div>
        <div> Род деятельности: ${gero.occupation} </div>
        <div> Друзья: ${gero.friends} </div>
        <div> Суперсилы: ${gero.superpower} </div>
        <div> ${gero.photogero} </div>
        <div> Подробнее: ${gero.information} </div>
        </div>`
    }
    document.getElementById("geroContainer").innerHTML = gerosContent;
});



