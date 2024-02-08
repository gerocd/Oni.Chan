import React from 'react'
import { Link } from 'react-router-dom';

function HomeReg() {

    


    return (
        <div className="content_box">
            <div className="caja">
                <div className="box_img">
                    <img src="/O.jpg" alt="logo" />
                </div>
                <h1 className='txt_log'>Register</h1>
                <form>
                    <div className='content__main'>
                        <div className='content__main_inp'>
                            <img className='icon_txt' src="./icons/usuario.png" alt="" />
                            <input className="box_txt" type="text" placeholder="Usuario" />
                        </div>
                        <div className='content__main_inp'>
                            <img className='icon_txt' src="./icons/candado-cerrado.png" alt="" />
                            <input className="box_txt" type="password" placeholder="Contraseña" />
                        </div>
                        
                    </div>
                    <div className="">
                        <div className='contenedor_btn'>
                            <Link to='/login' className='btn_login'>
                                Crear Cuenta
                            </Link>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeReg