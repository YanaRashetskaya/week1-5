
import styles from './App.css';
import Cat from './components/cat';
import {cats} from './components/data/dataCat';
import {card} from './components/data/dataCard';
import Card from './components/Card';

function App() {
  return (
    <div className={styles.App}>  
    <div className={styles.cat}>
      {cats.map((cat)=>
    <Cat name={cat.name} url={cat.url} key={cat.id} isSelected={cat.isSelected}></Cat>
    )}
    </div> 
    <div className={styles.cart}>
      {card.map((tarif)=>
    <Card header={tarif.header} main={tarif.main} speed={tarif.speed} footer={tarif.footer} isSelected={tarif.isSelected}></Card>
    )}
    </div> 
    </div>
  );
}

export default App;
