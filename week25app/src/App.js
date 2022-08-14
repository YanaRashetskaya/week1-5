import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Hero from './assets/components/hero';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 25, 3, 8, 2, 9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};



let json = `[{
  "id":1,
  "title": "Бэтмен",
  "adres": "DC Comics",
  "alterego": "Брюс Уэйн",
  "occupation": "борец с преступностью, филантроп, миллиардер",
  "friends": "Робин, Бэтгерл",
  "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
  "rating": "",
  "photogero" : "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
  "informationp1": "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. ",
  "informationp2": "Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом.",
  "informationp3": "Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
}, {
  "id":2,
  "title": "Супермен",
  "adres": "DC Comics",
  "alterego": "Кларк Кент",
  "occupation": "борец за справедливость",
  "friends": "собака Крипто",
  "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
  "photogero" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
  "informationp1": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена.",
  "informationp2": "Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать.",
  "informationp3": "Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
}, {
  "id":3,
  "title": "Железный человек",
  "adres": "Marvel Comics",
  "alterego": "Тони Старк",
  "occupation": "гений, миллиардер, плейбой, филантроп",
  "friends": "Мстители",
  "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  "photogero" : "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
  "informationp1": "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве,стали борцами с преступностью без особых сверхсил, невероятно богатые. ",
  "informationp2": "Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл.,который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже.Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз.",
  "informationp3": "Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета.Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
}, {
  "id":4,
  "title": "Спайдер-мен/Человек-паук",
  "adres": "Marvel Comics",
  "alterego": "Питер Паркер",
  "occupation": "борец за справедливость, студент, фотограф",
  "friends": "Мстители, Фантастическая четверка, Люди Икс",
  "superpower": " сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
  "photogero" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
  "informationp1": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)",
  "informationp2": "Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность».",
  "informationp3": "Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."
}, {
  "id":5,
  "title": "Капитан Америка",
  "adres": "Marvel Comics",
  "alterego": "Стивен Роджерс",
  "occupation": "супер-солдат",
  "friends": "Мстители",
  "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  "photogero" : "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
  "informationp1": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом.",
  "informationp2": "Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали.",
  "informationp3": "По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"
}, {
  "id":6,
  "title": "Тор",
  "adres": "Marvel Comics",
  "alterego": "нет; полное имя — Тор Одинсон",
  "occupation": "борец за справедливость, скандинавский бог",
  "friends": "Мстители",
  "superpower": "все, что может бог, плюс молот Мьелнир",
  "photogero" : "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
  "informationp1": "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении.",
  "informationp2": "Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии.",
  "informationp3": ""
}, {
  "id":7,
  "title": "Халк",
  "adres": " Marvel Comics",
  "alterego": "Брюс Беннер",
  "occupation": "супергерой, борец за справедливость, ученый-биохимик",
  "friends": "Мстители",
  "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
  "photogero" : "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
  "informationp1": "идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев.",
  "informationp2": "Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подвергсебя воздействию большого количества гамма-радиации.",
  "informationp3": "Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
}, {
  "id":8,
  "title": "Чудо-женщина",
  "adres": "DC Comics",
  "alterego": "Диана Принс",
  "occupation": "супергероиня, секретарь-референт",
  "friends": "Лига Справедливости, Бэтмен, Супермен",
  "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
  "photogero" : "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
  "informationp1": "пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты.",
  "informationp2": "Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма.",
  "informationp3": "У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
}, {
  "id":9,
  "title": "Черная вдова",
  "adres": "Marvel Comics",
  "alterego": "Наташа Романофф",
  "occupation": "супергероиня, шпионка",
  "friends": "Мстители",
  "superpower": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  "photogero" : "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
  "informationp1": "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы.",
  "informationp2": "Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :)",
  "informationp3": ""
}, {
  "id":10,
  "title": "Дэдпул",
  "adres": "Marvel Comics",
  "alterego": "Уэйд Уинстон Уилсон",
  "occupation": "антигерой, наемник",
  "friends": "частично Мстители, Человек-паук, Росомаха",
  "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
  "photogero" : "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/1034x543_0xac120002_2692921231540468872.jpg",
  "informationp1": "как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным.",
  "informationp2": "Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»",
  "informationp3": ""
}]`;

let geros = JSON.parse (json);
console.log(geros);

function App() {
  return (
  
    <div className="App">  
    <div className="Pie">
    <h1> Pie Chart</h1>
      <div style={{width:"600px", margin:"8px auto"}} ><Pie data={data} />
      </div>
    </div>
    <h1 className="title">Самые крутые супергерои</h1>
    <div className="heroContainer">
        {geros.map((hero) => 
            <Hero key={hero.id} title={hero.title}
              adres={hero.adres} alterego={hero.alterego} 
              occupation={hero.occupation} friends={hero.friends} 
              superpower={hero.superpower} photogero={hero.photogero}
              informationp1={hero.informationp1} informationp2={hero.informationp2} 
              informationp3={hero.informationp3}></Hero>
    )};
    </div>
    </div>
  );
}

export default App;
