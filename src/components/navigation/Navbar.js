import React from 'react';

import house from '../../assets/icons/house.svg';
import cart from '../../assets/icons/cart.svg';
import info from '../../assets/icons/info-circle.svg';
import money from '../../assets/icons/currency-dollar.svg';
import telephone from '../../assets/icons/telephone.svg';
import logo from '../../assets/img/imagen 2.png';
import './navbar.css';

export const Navbar = () => {
    return(
        <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <img src={logo} alt='' className='logo' />
            </div>
            <div className='topCenter'>
                <ul className='topListLeft'>
                    <li className='topListItemLeft'>
                        <img src={house} alt='icon' className='topIcon' />
                        Home
                    </li>
                    <li className='topListItemLeft'>
                        <img src={info} alt='icon' className='topIcon' />
                        About
                    </li>
                </ul>
                <ul className='topListRight'>
                    <li className='topListItemRight'>
                        <img src={money} alt='icon' className='topIcon' />
                        Offert
                    </li>
                    <li className='topListItemRight'>
                        <img src={telephone} alt='icon' className='topIcon' />
                        Contact
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                <img src={cart} alt="carrito" className='topIconCart' />
                <span className='topIconBadge'>2</span>
                </div>
                <img src='https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6' alt='' className='topAvatar' />
            </div>
        </div>
    </div>
    )
}