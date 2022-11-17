import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";

function BlogPost() {
  return (
    <>
    <header id="header">
        <PostTitle />
    </header>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="section-row sticky-container">
                        <MainPost />
                        <PostShares />
                    </div>

                    <div className="section-row text-center"></div>
                    
                    <div className="section-row"></div>
                    
                    <div className="section-row"></div>
                    
                    <div className="section-row"></div>
                </div>

                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
    </>
  );
}

export default BlogPost;



function PostTitle(){
    return(
        <div className="page-header" id="post-header">
            <div className="background-img" >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="post-meta">
                            <Link to="/javascript" className="post-category cat-2">JavaScript</Link>
                            <span className="post-date">March 23, 2022</span>
                        </div>
                        <h1>What are The Best JavaScript FrameWorks ?</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MainPost(){
    return(
        <div className="main-post">
            <h3>Lorem Ipsum: When to, and not to use it</h3>
            <p>Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore deleniti deserunt similique!</p>
            <p>The toppings you may choose Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tempora, numquam adipisci laborum odio dolores.</p>
            <figure className="figure-img">
                <img src={JavaImg} alt="" className="img-responsive" />
                <figcaption>So Lorem Ipsum is bad , well, not necessarilly </figcaption>
            </figure>
            
            <p>Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore deleniti deserunt similique!</p>
            <p>The toppings you may choose Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas tempora, numquam adipisci laborum odio dolores.</p>
            
            <p>Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore deleniti deserunt similique!</p>
            
            <blockquote className="blockquote">
                I've heard the argument that "lorem ipsum" is effective in wireframing or it helps people focus on the actual layout Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non odio animi. Voluptate rerum odio eius culpa debitis illo possimus sunt.
            </blockquote>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus exercitationem expedita eligendi, dolorum sed repudiandae.</p>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse dolorem debitis illo accusantium.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, a natus! Veniam suscipit, unde sint nisi minus dolor officiis doloribus assumenda maiores, totam dolore placeat eius.</p>
            
        </div>
    );
}

function PostShares(){
    return(
        <div className="post-shares sticky-shares">
            <a href="facebook.com" className="share-facebook"><i class="ri-facebook-box-fill"></i>
            </a>
            <a href="twitter.com" className="share-twitter"><i class="ri-twitter-fill"></i>
            </a>
            <a href="pinterest.com" className="share-pinterest"><i class="ri-pinterest-fill"></i>
            </a>
            <a href="linkedin.com" className="share-linkedin"><i class="ri-linkedin-box-fill"></i>
            </a>
            <a href="dribble.com" className="share-google-plus"><i class="ri-dribbble-fill"></i>
            </a>
        </div>
    );
}