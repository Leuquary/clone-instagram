import React from 'react';
import StoryFeed from '../story_feed/StoryFeed';
import Perfil1 from '../assets/perfil1.png';
import Perfil2 from '../assets/perfil2.png';
import Perfil3 from '../assets/perfil3.png';
import Perfil4 from '../assets/perfil4.png';
import Perfil5 from '../assets/perfil5.png';
import Perfil6 from '../assets/perfil6.png';
import Perfil7 from '../assets/perfil7.png';

import './Stories.css';

var stories = [
    {
        imagem: Perfil1,
        nome: "santos_rot9"
    },
    {
        imagem: Perfil2,
        nome: "larissa_sato"
    },
    {
        imagem: Perfil3,
        nome: "lanaUri8"
    },
    {
        imagem: Perfil4,
        nome: "leoleo"
    },
    {
        imagem: Perfil5,
        nome: "mikel__u"
    },
    {
        imagem: Perfil6,
        nome: "tatavic"
    },
    {
        imagem: Perfil7,
        nome: "nikkolas"
    }
];

export default function Stories(){
    return(
        <div className='container_stories'>
           {
                stories.map((story) => {
                    return <StoryFeed imagem={story.imagem} nome={story.nome}></StoryFeed>
                })
           }
        </div>
    );
}