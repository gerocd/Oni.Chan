import React from 'react'
import'./cardContactos.css'

function CardContactos(props) {
    return (
        <div className='contactCard'>
            <div className="cardImg ">
                    <img className='card_Img' src={props.contactCard[props.cardKey].imgUser} alt="userImagen" />
            </div>
            <div className="lower_container">
                <h1 className='txt'>{props.contactCard[props.cardKey].apellido}</h1>
                <h3 className='txt'>{props.contactCard[props.cardKey].nombre}</h3>
                <p className='txt'>Tel.</p>
                <p className='txt'>{props.contactCard[props.cardKey].dataContact}</p>
            </div>
        </div>
    );
}

export default CardContactos