import React from 'react';

import './footer.css';
import logo from '../../assets/img/imagen 2.png';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='right'>
                <div className='box'>
                    <figure>
                        {/* <a> */}
                            <img src={ logo } alt="logo" />
                        {/* </a> */}
                    </figure>
                </div>
                <div className='box-center'>
                <h2 className='about'>SOBRE NOSOTROS</h2>
                    <p>Somos un grupo de la carrera de informatica que se denomina BYRON para este proyecto, conformado por 6 personas
                    que se encargaron de realizar esta maqueta con React, para la materia de algoritmo y programacion II.
                    </p>
                </div>
                <div className='box-two'>
                    <h2 className='socialTitle'>SIGUENOS</h2>
                    <div className='socials'>
                        <img src={ instagram } alt="instagram" onClick={""} className='social'/>
                        <img src={ facebook } alt="facebook" onClick={""} className='social'/>
                        <img src={ whatsapp } alt="whatsapp" onClick={""} className='social'/>
                    </div>
                </div>
            </div>
            <div className='left'>
                <small>&copy; 2022 <span>BYRON</span> - Todos los derechos reservados</small>
            </div>
        </div>
    )
}