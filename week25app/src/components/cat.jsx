import './style/cat.scss';

function Cat(props) {

    return (
        <div className={`cat-card ${props.isSelected ? "selected" : ""}`}>
            <img src={props.url} alt="nice" />
            <div className="cat-name"> {props.name}</div>
            <div className="cat-text"> Ласковый и игривый</div>
            <button>Взять домой</button>
        </div>
    );
}
export default Cat;