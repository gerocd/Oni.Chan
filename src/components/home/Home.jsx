import Header from './header/Header';
import Navbar from './navbar/Navbar';
import './home.css'
import Footer from './footer/Footer';
import Carrousel from './carrousel/Carrousel';
import Main from './main/Main';



export default function Home(){

    const sliderImagenes= [
        '/slider86.png',
        '/sliderBlack.png',
        '/sliderHells.png',
        '/sliderJujutsu.png',
        '/sliderTrigun.png',
        '/sliderDeath.png',
    ];

    return(
        <>
        <div className='cont__home'>
            <div className='cont_header'>
                <Header/>
            </div>
            <div className='cont_carrousel borde '>
                <Carrousel imagenes={sliderImagenes}/>
            </div>
            <div className='cont_navbar'>
                <Navbar />
            </div>
            <div className='cont_section borde'>
                <Main/>
            </div>
            <div className='cont_footer borde'>
                <Footer/>
            </div>
        </div>
        </>
    );
}