import React from 'react';
import './SidebarLeft.css';

export default function SidebarLeft(){
    return (
        <div className='container_sidebar_left'>
            <div className='sidebar'>
                <div className='logo'>
                    <h1>Instagram</h1>
                </div>
                <nav className='menu'>
                    <ul className='list'>
                        <li>
                            <span><i className="fi fi-sr-house-chimney"></i></span>
                            Página inicial
                        </li>
                        <li>
                            <span><i className="fi fi-rr-search"></i></span>
                            Pesquisa
                        </li>
                        <li>
                            <span><i className="fi fi-sr-navigation"></i></span>
                            Explorar
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}