import './card.css'

function Card(props) {

    return (
        <div className='card'>
            <a href={props.imgCard[props.cardKey].url}>
            <img src={props.imgCard[props.cardKey].img} alt="imgCard" />
            <h3>{props.imgCard[props.cardKey].nameCard}</h3>
            </a>
            
        </div>
    );
}

export default Card;