import React from "react";

import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";
import ReactImg from "../img/xpost-2.jpg.pagespeed.ic.DOAToGcDYE.webp"
import BlogImg from "../img/xpost-3.jpg.pagespeed.ic.UjtolzGXxD.webp";
import SmallImg from "../img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp";
import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";
import RowImg from "../img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp";

import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function Home() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <Post Img={JavaImg} type="JavaScript" date="March 27,2022" desc="Chrome Extension Protects Against JavaScript Side-Chanel Criminal Attacks" class="post-category cat-2"/>
            <Post Img={ReactImg} type="React JS" date="February 12,2022" desc="Why is React so popular ?" class="post-category cat-3"/>

          </div>

          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Most Recents"/>
            </div>

            <MedPost />

            <MedPost />

            <MedPost />

            <div className="clearfix visible-md visible-lg"></div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <Col12 />

                <Post2 />

                <Post2 />

                <div className="clearfix visible-md visible-lg"></div>

                <Post2 />

                <Post2 />

                <div className="clearfix visible-md visible-lg"></div>

                <Post2 />

                <Post2 />

                <div className="clearfix visible-md visible-lg"></div>
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
                <PostWidget />
              </div>

              <div className="aside-widget">
                <div className="section-title">
                  <SectionTitle title="On Youtube"/>
                </div>
                <PostThumb />
                <PostThumb />
              </div>

              {/* sample AD */}
              <SampleAD />
            </div>
          </div>
        </div>
      </div>

      <div className="section section-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <SectionTitle title="Discussions"/>
              </div>
            </div>
            <MedPost />
            <MedPost />
            <MedPost />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <SectionTitle title="Most Read"/>
                </div>
                <PostRow />
                <PostRow />
                <PostRow />
                
                <div className="col-md-12">
                  <div className="section-row">
                    <a
                      className="primary-button center"
                      href="https://teddy-webdev.github.io"
                    >
                      Teddy's Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
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
                  <CustomLink to="/webdesign" className="cat-1">Web Design
                      <span>340</span>
                      </CustomLink>
                    <CustomLink to="/javascript" className="cat-2">JavaScript
                      <span>71</span>
                      </CustomLink>
                    <CustomLink to="/css" className="cat-4">CSS
                      <span>41</span>
                      </CustomLink>
                      <CustomLink to="/react" className="cat-3">ReactJS
                      <span>66</span>
                      </CustomLink>
                  </ul>
                </div>
              </div>

              <div className="aside-widget">
              <div className="section-title">
              <SectionTitle title="More . . ."/>
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

export default Home;

/* template of the Big Post */

function Post(props) {
  return (
    <div className="col-md-6">
      <div className="post post-thumb">
        <a className="post-img" href="https://instagram.com">
          <img src={props.Img} alt="" />
        </a>
        <div className="post-body">
          <div className="post-meta">
            <Link href="/category" className={props.class}>
              {props.type}
            </Link>
            <span className="post-date">{props.date}</span>
          </div>
          <h3 className="post-title">
            <Link href="blog-post">
            {props.desc}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}


function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2>{props.title}</h2>
    </div>
  );
}


/* template of the Mediumig Post */
function MedPost() {
  return (
    <div className="col-md-4">
      <div className="post">
        <Link href="/blog-post" className="post-img">
          <img src={BlogImg} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-meta">
            <Link href="/category" className="post-category cat-1">
              Web Design
            </Link>
            <span className="post-date">March 27, 2022</span>
          </div>
          <h3 className="post-title">
            <Link to="/blog-post">
              PageDraw UI Builder Turns Your website Design Mockup Into Xode
              Automaticaly
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}


/* template of the Small Post */
function Col12() {
  return (
    <div className="post post-thumb">
      <a className="post-img" href="https://instagram.com">
        <img src={JavaImg} alt="" />
      </a>
      <div className="post-body">
        <div className="post-meta">
          <Link to="/javascript" className="post-category cat-2">
            JavaScript
          </Link>
          <span className="post-date">March 27, 2022</span>
        </div>
        <h3 className="post-title">
          <Link to="/blog-post">
            Chrome Extension Protects Against JavaScript Side-Chanel Criminal
            Attacks
          </Link>
        </h3>
      </div>
    </div>
  );
}


function Post2() {
  return (
    <div className="col-md-6">
      <div className="post">
        <a className="post-img" href="https://instagram.com">
          <img src={JavaImg} alt="" />
        </a>
        <div className="post-body">
          <div className="post-meta">
            <Link to="blog-ost" className="post-category cat-4">
              CSS
            </Link>
            <span className="post-date">March 27, 2022</span>
          </div>
          <h3 className="post-title">
            <Link to="blog-post">CSS Float: A Tutorial</Link>
          </h3>
        </div>
      </div>
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

function PostThumb() {
  return (
    <div className="post post-thumb">
      <a className="post-img" href="https://instagram.com">
        <img src={JavaImg} alt="" />
      </a>
      <div className="post-body">
        <div className="post-meta">
          <Link to="/reactLib" className="post-category cat-3">
            React JS
          </Link>
          <span className="post-date">March 27, 2022</span>
        </div>
        <h3 className="post-title">
          <Link to="/blog-post">
            Chrome Extension Protects Against JavaScript Side-Chanel Criminal
            Attacks
          </Link>
        </h3>
      </div>
    </div>
  );
}


function SampleAD() {
  return (
    <div className="aside-widget text-center">
      <a href="https://instagram.com">
        <img src={Advertisement} alt="" className="img-repsosive" />
      </a>
    </div>
  );
}


/* templates of the last section */

function PostRow() {
  return (
    <div className="col-md-12">
      <div className="post post-row">
        <Link to="blog-post" className="post-img">
          <img src={RowImg} alt="" />
        </Link>
        <div className="post-body">
          <div className="post-meta">
            <a href="categoty.html" className="post-category cat-2">
              Web Design
            </a>
            <spnan className="post-date">March 27, 2022</spnan>
          </div>
          <h3 className="post-title">
            <a href="blog-post.html">
              Exercitationem ducimus corrupti velit repudiandae, minus sit,
              mollitia beatae nisi nostrum facere quidem?
            </a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            excepturi voluptas cupiditate tenetur voluptate, ad eum aspernatur
            illum? Sit soluta cum quis corporis ratione minus, dolores cumque
            quod dolor inventore officiis alias!
          </p>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})


  return (
      <li className={isActive ? ""  : ""}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  )
}