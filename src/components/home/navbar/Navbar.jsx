import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {

    return (
        <>
            <div className='navbar_item'>
                <Link to='/axios'>
                <button className='btn_navbar' >
                    <p>Axios</p>
                </button>
                </Link>
            </div>
        </>
    );
}