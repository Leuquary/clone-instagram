import React from 'react';
import Profile from '../../pages/profile/Profile';
import './SidebarRight.css';
import Imagem from '../assets/perfil.jpg';

var profiles = [
    {
        nome: "dieguinhe",
        legenda: "Sugestões para você"
    },
    {
        nome: "luixguime",
        legenda: "Sugestões para você"
    },
    {
        nome: "tatavic",
        legenda: "Sugestões para você"
    }
]

export default function SidebarRight(){
    return(
        <div className='container_sidebar_right'>
            <div className='my_profile'>
                <Profile nome="raquel" legenda="Raquel" imagem={Imagem}></Profile>
            </div>
            <div className='suggestion'>
                <h4>Sugestões para você</h4>
                <div className='list_suggestion'>
                    {   
                        profiles.map((profile) => {
                            return <Profile imagem={Imagem} nome={profile.nome} legenda={profile.legenda}></Profile>
                        })
                    }
                </div>
            </div>
        </div>
    );
}