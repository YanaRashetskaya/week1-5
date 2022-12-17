
import styles from './App.css';
import {card} from './components/data/dataCard';
import Card from './components/Card';
import dark from './components/style/dark.css';
import blue from './components/style/blue.css';
import green from './components/style/green.css';
import red from './components/style/red.css';
import Button from './components/Button';
import Timer from './components/Timer';



function App() {
const colorBackground =[blue, green, red, dark];

  return (
    <div className={styles.App}>    
    <div className={styles.cart}>
      {card.map((tarif, id)=>
    <Card header={tarif.header} main={tarif.main} theme={colorBackground[id]} speed={tarif.speed} footer={tarif.footer}
    isSelected={tarif.isSelected}></Card>
    )}
    </div> 
    <Button name={'Нажми меня'}  id="buttonTest" className={styles.Button}></Button>
    <div className={styles.timer}>
    <Timer ></Timer>
    </div>
    </div>
  );
}

export default App;
