import React from 'react';
import Logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink/indexx';

function Menu() {
    return (
        <nav className="Menu">
            <a href='/'>
            <img className='Logo' src={Logo} alt='logo do site' />
            </a>

            <ButtonLink className='ButtonLink' href='/'>
                Novo vídeo
            </ButtonLink>


        </nav>
    );
}

export default Menu;