import React from 'react';
import Profile from '../../pages/profile/Profile';
import './SidebarRight.css';
import Perfil1 from '../assets/perfil1.png';
import Perfil2 from '../assets/perfil2.png';
import Perfil3 from '../assets/perfil3.png';
import Perfil4 from '../assets/perfil4.png';
import PerfilPrincipal from '../assets/perfil_principal.png';

var profiles = [
    {
        imagem: Perfil1,
        nome: "santos_rot9",
        legenda: "Sugestões para você"
    },
    {
        imagem: Perfil2,
        nome: "larissa_sato",
        legenda: "Sugestões para você"
    },
    {
        imagem: Perfil3,
        nome: "lanaUri8",
        legenda: "Sugestões para você"
    }
]

export default function SidebarRight(){
    return(
        <div className='container_sidebar_right'>
            <div className='sidebar_right'> 
                <div className='my_profile'>
                    <Profile nome="raquelcosta_07" legenda="Raquel" imagem={PerfilPrincipal} opcoes="Mudar"></Profile>
                </div>
                <div className='suggestion'>
                    <div className='title'>
                        <h4>Sugestões para você</h4>
                        <span>Ver tudo</span>
                    </div>
                    <div className='list_suggestion'>
                        {   
                            profiles.map((profile) => {
                                return <Profile imagem={profile.imagem} nome={profile.nome} legenda={profile.legenda} opcoes="Seguir"></Profile>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}