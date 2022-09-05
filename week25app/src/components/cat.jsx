import './cat.scss';

function Cat(props) {
    const classCat = (props.isSelected ? "selected" : "");
    return (
        <div className={"cat-card" + classCat}>
            <img src={props.url} />
            <div className="cat-name"> {props.name}</div>
            <div className="cat-text"> Ласковый и игривый</div>
            <button>Взять домой</button>
        </div>
    );
}
export default Cat;