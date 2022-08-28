
import styles from './App.css';
import Cat from './components/cat';
import {cats} from './components/data/dataCat';

function App() {
  return (
    <div className={styles.App}>  
    <div className="cat">
      {cats.map((cat)=>
    <Cat name={cat.name} url={cat.url}></Cat>
    )}
    </div>

    </div>
  );
}

export default App;
