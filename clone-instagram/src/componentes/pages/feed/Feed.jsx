import React from 'react';
import './Feed.css';
import Post from '../post/Post';
import Imagem from '../assets/post.jpg';

var posts = [
    {
        imagem: Imagem,
        descricao: "Descrição do post"
    }
]

export default function Feed(){
    return(
        <div className='container_feed'>
            {
                posts.map((post) => {
                    return <Post imagem={post.imagem} descricao={post.descricao}></Post>
                })
            }
        </div>
    );
}