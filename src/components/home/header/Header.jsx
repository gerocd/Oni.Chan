import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {

    return (
        <>
            <div className='content_header'>
                <div className='header_logo'>
                    <Link to='/'>
                    <img className="logo" src="Logo.jpg" alt="" />
                    </Link>
                </div>
                <div className='header_menu'>
                    <ul className='menu'>
                        <li className='menu_element'>
                            <Link to='/' className='boton_explorar'>
                            Inicio
                            </Link>
                        </li>
                        <li className='menu_element'>
                            <Link to='/calendario' className='boton_calendario'>
                                Calendario
                            </Link>
                        </li>
                        <li className='menu_element'>
                            <Link to='/contactos' className='boton_contactos'>
                            Integrantes
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='header_user'>
                    <div className='menu_user'>
                        <ul className='menu'>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>

                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className='user_logo'>
                        <div className="user">
                            <Link to='/login'>
                                <img className='user_img' src="slime.png" alt="" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}