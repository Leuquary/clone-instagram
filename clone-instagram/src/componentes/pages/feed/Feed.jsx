import React from 'react';
import './Feed.css';
import Post from '../post/Post';
import Imagem from '../assets/post.jpg';
import Stories from '../../pages/stories/Stories';
import Perfil1 from '../assets/perfil1.png';
import Perfil2 from '../assets/perfil2.png';
import Perfil3 from '../assets/perfil3.png';
import Perfil4 from '../assets/perfil4.png';
import Perfil5 from '../assets/perfil5.png';
import Perfil6 from '../assets/perfil6.png';
import Perfil7 from '../assets/perfil7.png';
import Perfil8 from '../assets/perfil8.webp';
import Perfil9 from '../assets/perfil9.png';
import Perfil10 from '../assets/perfil10.jpg';
import Perfil11 from '../assets/perfil11.jpg';
import Perfil12 from '../assets/perfil12.jpg';
import Nilce from '../assets/leon_nilce.png';

import Gatinho1 from '../assets/gatinho1.png';
import Gatinho2 from '../assets/gatinho2.png';
import Gatinho3 from '../assets/gatinho3.png';
import Gatinho4 from '../assets/gatinho4.png';

var posts = [
    {
        post_imagem: Gatinho1,
        perfil_imagem: Perfil8,
        descricao: "笑わないでとマルくんが言ってます",
        likes: 624.169,
        perfil: "nekonekokazoku",
        status: "Original video",
        periodo: "2 sem"
    },
    {
        post_imagem: Gatinho2,
        perfil_imagem: Perfil9,
        descricao: "🏎️🐱 cats",
        likes: 71.569,
        perfil: "silly_animals",
        status: "Original video",
        periodo: "1 m"
    },
    {
        post_imagem: Gatinho3,
        perfil_imagem: Perfil11,
        descricao: "cat trying drink a bit of water",
        likes: 279.527,
        perfil: "joseph_of_water",
        status: "David Erick Ramos - Koriki Forest",
        periodo: "20h"
    },
    {
        post_imagem: Nilce,
        perfil_imagem: Perfil10,
        descricao: "",
        likes: 175.388,
        perfil: "nilmoretto",
        periodo: "1d"
    },
    {
        post_imagem: Gatinho4,
        perfil_imagem: Perfil12,
        descricao: "🐾🐈",
        likes: 1.663,
        perfil: "ipinnn00",
        periodo: "5d"
    }
]

export default function Feed(){
    return(
        <div className='container_feed'>
            <Stories></Stories>
            {
                posts.map((post) => {
                    return <Post post_imagem={post.post_imagem} descricao={post.descricao} likes={post.likes} perfil={post.perfil} status={post.status} perfil_imagem={post.perfil_imagem} periodo={post.periodo}></Post>
                })
            }
        </div>
    );
}