import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from './components/ButtonLink/indexx';

function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
            <img className='Logo' src={Logo} alt='logo do site' />
            </Link>

            <ButtonLink className='ButtonLink' href='/cadastro/video'>
                Novo vídeo
            </ButtonLink>


        </nav>
    );
}

export default Menu;