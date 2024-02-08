import React from 'react'
import './carrousel.css'

function Carrousel({ imagenes }) {

    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes?.length;

    const siguienteImagen = () => {
        setImagenActual(imagenActual === cantidad - 1 ?
            0 : imagenActual + 1);
    }

    const anteriorImagen = () =>{
        setImagenActual(imagenActual === 0 ? cantidad -
             1 : imagenActual - 1);
    }

    if (!Array.isArray(imagenes) || cantidad === 0)
        return;

    return (
        <div className='cont_carrousel'>
            <button className='btn_carrousel' onClick={anteriorImagen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #CBA717" class="bi bi-arrow-left " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </button>
            {imagenes.map((imagen, indice) => {
                return (
                    <div>{imagenActual === indice && (
                        <img key={indice} src={imagen}
                            alt='sliderImg' />
                    )}
                    </div>
                );
            })}
            <button className='btn_carrousel' onClick={siguienteImagen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #CBA717" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </button>
        </div>
    )
}

export default Carrousel