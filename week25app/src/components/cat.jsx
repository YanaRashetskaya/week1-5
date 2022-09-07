import './cat.scss';

function Cat(props) {
    let classCat = "";
    if (props.isSelected) classCat = "selected";
    return (
        <div className={"cat-card " + classCat}>
            <img src={props.url} alt="nice" />
            <div className="cat-name"> {props.name}</div>
            <div className="cat-text"> Ласковый и игривый</div>
            <button>Взять домой</button>
        </div>
    );
}
export default Cat;