import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";
import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";
import SmallImg from "../img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp";


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
            </div>
            
            <div className="col-md-4">
            <div className="aside-widget">
                <div className="section-title">
                <SectionTitle title="Most Asked For"/>
                </div>

                <PostWidget />
                <PostWidget />
                
                <PostWidget />
              </div>
              <div className="aside-widget text-center">
                <Link className="aaa" to="advertiser.website">
                  <img src={Advertisement} alt="" />
                </Link>
              </div>
              <div className="aside-widget">
                <div className="section-title">
                  <h2>Categories</h2>
                </div>
                <div className="category-widget">
                  <ul>
                    <CustomLink to="/webdesign" className="cat-1">
                      Web Design
                      <span>340</span>
                    </CustomLink>
                    <CustomLink to="/javascript" className="cat-2">
                      JavaScript
                      <span>71</span>
                    </CustomLink>
                    <CustomLink to="/css" className="cat-4">
                      CSS
                      <span>41</span>
                    </CustomLink>
                    <CustomLink to="/react" className="cat-3">
                      ReactJS
                      <span>66</span>
                    </CustomLink>
                  </ul>
                </div>
              </div>

              <div className="aside-widget">
                <div className="section-title">
                  <SectionTitle title="More " />
                </div>
                <div className="tags-widget">
                  <ul>
                    <CustomLink to="/arduinos">Arduino</CustomLink>
                    <CustomLink to="/tutorials">Tutorials</CustomLink>
                    <CustomLink to="/javascript">JavaScript</CustomLink>
                    <CustomLink to="/games">Games</CustomLink>
                    <CustomLink to="/discover">Discover</CustomLink>
                    <CustomLink to="/chrome">Extensions</CustomLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;

function PostTitle() {
  return (
    <div className="page-header" id="post-header">
      <div className="background-img"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="post-meta">
              <Link to="/javascript" className="post-category cat-2">
                JavaScript
              </Link>
              <span className="post-date">March 23, 2022</span>
            </div>
            <h1>What are The Best JavaScript FrameWorks ?</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainPost() {
  return (
    <div className="main-post">
      <h3>Lorem Ipsum: When to, and not to use it</h3>
      <p>
        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      </p>
      <p>
        The toppings you may choose Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas tempora, numquam adipisci laborum odio
        dolores.
      </p>
      <figure className="figure-img">
        <img src={JavaImg} alt="" className="img-responsive" />
        <figcaption>So Lorem Ipsum is bad , well, not necessarilly </figcaption>
      </figure>

      <p>
        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      </p>
      <p>
        The toppings you may choose Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptas tempora, numquam adipisci laborum odio
        dolores.
      </p>

      <p>
        Do you like cheese Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla inventore deleniti deserunt similique!
      </p>

      <blockquote className="blockquote">
        I've heard the argument that "lorem ipsum" is effective in wireframing
        or it helps people focus on the actual layout Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quod non odio animi. Voluptate rerum odio
        eius culpa debitis illo possimus sunt.
      </blockquote>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        necessitatibus exercitationem expedita eligendi, dolorum sed
        repudiandae.
      </p>
      <h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo esse
        dolorem debitis illo accusantium.
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, a
        natus! Veniam suscipit, unde sint nisi minus dolor officiis doloribus
        assumenda maiores, totam dolore placeat eius.
      </p>
    </div>
  );
}

function PostShares() {
  return (
    <div className="post-shares sticky-shares">
      <a href="facebook.com" className="share-facebook">
        <i class="ri-facebook-box-fill"></i>
      </a>
      <a href="twitter.com" className="share-twitter">
        <i class="ri-twitter-fill"></i>
      </a>
      <a href="pinterest.com" className="share-pinterest">
        <i class="ri-pinterest-fill"></i>
      </a>
      <a href="linkedin.com" className="share-linkedin">
        <i class="ri-linkedin-box-fill"></i>
      </a>
      <a href="dribble.com" className="share-google-plus">
        <i class="ri-dribbble-fill"></i>
      </a>
    </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}{" "}
      </Link>
    </li>
  );
}
function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}
function PostWidget() {
    return (
      <div className="post post-widget">
        <Link to="blog-post" className="post-img">
          <img src={SmallImg} alt="" />
        </Link>
        <div className="post-body">
          <h3 className="post-title">
            <Link to="/blog-post">
              Tell-A-Tool: Guide to Web Design And Development Tools
            </Link>
          </h3>
        </div>
      </div>
    );
  }