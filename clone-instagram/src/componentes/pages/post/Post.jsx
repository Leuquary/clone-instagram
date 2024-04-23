import React from 'react';
import './Post.css';

export default function Post(props){
    return(
        <div className='container_post'>
            <figure className='imagem'>
                <img src={props.imagemPost} alt="Imagem do Post" />
            </figure>
            <div className='post_content'>
                <div className='icons'>
                    <div className='like_share_comment'>
                        <div className='like'>
                            <span><i className="fi fi-rs-heart"></i></span>
                        </div>
                        <div className='comments'>
                            <span><i className="fi fi-rs-comments"></i></span>
                        </div>
                        <div className='send'>
                            <span><i className="fi fi-rr-paper-plane"></i></span>
                        </div>
                    </div>
                    <div className='save'>
                        <span><i className="fi fi-rr-bookmark"></i></span>
                    </div>
                </div>
                <div className='description'>
                    <p>{props.descricao}</p>
                </div>
                <div>
                    <a href="">Ver comentários</a>
                </div>
            </div>  
        </div>
    );
}