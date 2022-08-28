import './cat.css';

function Cat(props) {
    return (
        <div className="cat-card" >
            <img src={props.url} />
            <div className="cat-name"> {props.name}</div>
            <div className="cat-text"> Ласковый и игривый</div>
            <button>Взять домой</button>
        </div>
    );
}
export default Cat;