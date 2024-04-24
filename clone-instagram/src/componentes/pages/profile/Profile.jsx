import React from 'react';
import './Profile.css';

export default function Profile(props){
    return(
        <div className='profile'>
            <figure className='imagem_perfil'>
                <img src={props.imagem} alt="Imagem de perfil" />
            </figure>
            <div className='profile_description'>
                <div className='top_name'>
                    <span>{props.nome}</span>
                </div>
                <div className='bottom_name'>
                    <span>{props.legenda}</span>
                </div>
            </div>
        </div>
    );
}