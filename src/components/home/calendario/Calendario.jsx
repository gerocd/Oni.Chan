import React from 'react'
import './calendario.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const msjDay = 'Los horarios estarán pronto disponibles'

function Calendario(props) {

    return (

        <div className='cont_calendario'>
            <div className='hdr'>
                <Header />
            </div>
            <div className='cal'>
                <ul className='dias l'>
                    <li className='dia'>
                        <li className='bordes listdia'>Lun</li>
                        <li>
                            <ol className='l'>
                                <li className='bordes ldia'>
                                    <p>8:30am</p>
                                    <h3>DEAD MOUNT DEATH PLAY</h3>
                                    <p>Episodio 12 Disponible</p>
                                </li>
                                <li className='bordes ldia'>
                                    <p>1:00pm</p>
                                    <h3>VINLAND SAGA SEASON 2 (SPANISH DUB)</h3>
                                    <p>Episodio 22 Disponible</p>

                                </li>

                            </ol>
                        </li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Mar</li>
                        <li>
                            <ol className='l'>
                                <li className='bordes ldia'>
                                    <p>2:00pm</p>
                                    <h3>KONOSUBA -AN EXPLOSION ON THIS WONDERFUL WORLD! (SPANISH DUB)</h3>
                                    <p>Episodio 10 Disponible</p>
                                </li>

                            </ol>
                        </li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Mier</li>
                        <li className='bordes ldia'>{msjDay}</li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Juev</li>
                        <li className='bordes ldia'> {msjDay}</li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Vier</li>
                        <li className='bordes ldia'>{msjDay}</li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Sab</li>
                        <li className='bordes ldia'>{msjDay}</li>
                    </li>
                    <li className='dia'>
                        <li className='bordes listdia'>Dom</li>
                        <li className='bordes ldia'>{msjDay}</li>
                    </li>
                </ul>
            </div>
            <div className='ftr'>
                <Footer />
            </div>
        </div>

    );
}


export default Calendario