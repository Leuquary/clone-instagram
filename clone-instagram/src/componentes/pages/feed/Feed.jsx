import React from 'react';
import './Feed.css';
import Post from '../post/Post';

var posts = [
    {
        imagem: "../assets/post.jpg",
        descricao: "Descrição do post"
    }
]

export default function Feed(){
    return(
        <div className='container_feed'>
            {
                posts.map((post) => {
                    return <Post imagemPost={post.imagem} descricao={post.descricao}></Post>
                })
            }
        </div>
    );
}