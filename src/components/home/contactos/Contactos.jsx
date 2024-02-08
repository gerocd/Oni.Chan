import Header from '../header/Header'
import Footer from '../footer/Footer';
import CardContactos from './cardContactos/CardContactos';
import './contactos.css'

function Contactos() {
    const info = {
        key1: {
            nombre: 'Juan Marco',
            apellido: 'Cristori',
            imgUser: 'user/gojo.png',
            dataContact: '3812589865',
        },
        key2: {
            nombre: 'Geronimo',
            apellido: 'Cordoba',
            imgUser: 'user/denji.png',
            dataContact: '3812192547',
        },
        key3: {
            nombre: 'Giuliano',
            apellido: 'Colella',
            imgUser: 'user/yami.png',
            dataContact: '3812765986',
        },
    }

    return (
        <div className='cont_contactos'>
            <div className='h'>
                <Header />
            </div>
            <div className='c'>
                <div>
                    <CardContactos contactCard={info} cardKey='key1' />
                </div>
                <div>
                    <CardContactos contactCard={info} cardKey='key2' />
                </div>
                <div>
                    <CardContactos contactCard={info} cardKey='key3' />
                </div>
            </div>
            <div className='f'>
                <Footer />
            </div >
        </div>


    );
}

export default Contactos