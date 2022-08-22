import './hero.css';

function Hero(props) {
    return (
        <div className="Container">
            <div className="gero">
                <h2> {props.title}</h2>
                <div> Вселенная: {props.adres} </div>
                <div> Альтер эго:  {props.alterego} </div>
                <div> Род деятельности: {props.occupation} </div>
                <div> Друзья: {props.friends} </div>
                <div> Суперсилы: {props.superpower} </div>
                <div>
                    <label>Личная оценка:</label>
                    <input type="range" id="rating" name="rating"
                        min="0" max="10" />
                </div>
                <img src={props.photogero}></img>
                <p> Подробнее: {props.informationp1} </p>
                <p> {props.informationp2} </p>
                <p> {props.informationp3} </p>
            </div>
        </div>
    );
}
export default Hero;

