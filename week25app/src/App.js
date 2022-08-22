import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Hero from './components/hero';
import Cat from './components/cat';
import json from './data.js';


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


let geros = JSON.parse (json);

const cats = [
  {
    name:"Кузя",
    url:"https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp"
  },
  {
    name:"Мурзик",
    url:"https://www.belanta.vet/vet-blog/wp-content/uploads/2019/09/1-6.jpg"
  },
  {
    name:"Боня",
    url:"https://www.belanta.vet/vet-blog/wp-content/uploads/2019/09/5-4.jpg"
  }
];

function App() {
  return (
  //week 25
    <div className="App">  
    <div className="Pie">
    <h1> Pie Chart</h1>
      <div style={{width:"600px", margin:"8px auto"}} ><Pie data={data} />
      </div>
    </div>
  //week 27
    <div className="cat">
      {cats.map((cat)=>
    <Cat name={cat.name} url={cat.url}></Cat>
    )}
    </div>
    // week26
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
