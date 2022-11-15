import React from "react";
import JavaImg from "../img/xpost-1.jpg.pagespeed.ic.2GXRfHYjOg.webp";
import BlogImg from "../img/xpost-3.jpg.pagespeed.ic.UjtolzGXxD.webp";
import SmallImg from "../img/xwidget-1.jpg.pagespeed.ic.NYJjOYjv_V.webp";
import Advertisement from "../img/xad-1.jpg.pagespeed.ic.qQJhsdJdF0.webp";
import RowImg from "../img/xpost-4.jpg.pagespeed.ic.5tBCPmCJW-.webp";

export default function reactlib() {
  return (
    <>
      <div className="section">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
            <div className="section-title">
                  <h2>React-JS</h2>
                </div>
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
                  <h2>Most ASked For</h2>
                </div>

                <PostWidget />
                <PostWidget />
                <PostWidget />
                <PostWidget />
              </div>

              <div className="aside-widget">
                <div className="section-title">
                  <h2>On Youtube</h2>
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

      

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <SectionTitle />
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
                <a className="aaa" href="advertiser.website">
                  <img src={Advertisement} alt="" />
                </a>
              </div>
              <div className="aside-widget">
                <div className="section-title">
                  <h2>Categories</h2>
                </div>
                <div className="category-widget">
                  <ul>
                    <li>
                      <a href="wepdesign.jsx" className="cat-1">
                        Web Design
                        <span>340</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript.jsx" className="cat-2">
                        JavaScript
                        <span>74</span>
                      </a>
                    </li>
                    <li>
                      <a href="css.jsx" className="cat-3">
                        CSS
                        <span>41</span>
                      </a>
                    </li>
                    <li>
                      <a href="react.jsx" className="cat-4">
                        ReactJS
                        <span>66</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="aside-widget">
                <div className="section-title">
                  <h2>More</h2>
                </div>
                <div className="tags-widget">
                  <ul>
                    <li>
                      <a href="category.html">Chrome</a>
                    </li>
                    <li>
                      <a href="category.html">CSS</a>
                    </li>
                    <li>
                      <a href="category.html">Tutorials</a>
                    </li>
                    <li>
                      <a href="category.html">BackEnd</a>
                    </li>
                    <li>
                      <a href="category.html">Web-Sites</a>
                    </li>
                    <li>
                      <a href="category.html">MyGames</a>
                    </li>
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


function SectionTitle() {
  return (
    <div className="section-title">
      <h2>Recent Posts</h2>
    </div>
  );
}

/* template of the Mediumig Post */
function MedPost() {
  return (
    <div className="col-md-4">
      <div className="post">
        <a href="www.blog-post.html" className="post-img">
          <img src={BlogImg} alt="" />
        </a>
        <div className="post-body">
          <div className="post-meta">
            <a href="www.category.html" className="post-category cat-1">
              Web Design
            </a>
            <span className="post-date">March 27, 2022</span>
          </div>
          <h3 className="post-title">
            <a href="www.blog-post.html">
              PageDraw UI Builder Turns Your website Design Mockup Into Xode
              Automaticaly
            </a>
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
          <a href="https://category.html" className="post-category cat-2">
            JavaScript
          </a>
          <span className="post-date">March 27, 2022</span>
        </div>
        <h3 className="post-title">
          <a href="https://blog-post.html">
            Chrome Extension Protects Against JavaScript Side-Chanel Criminal
            Attacks
          </a>
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
            <a href="https://category.html" className="post-category cat-4">
              CSS
            </a>
            <span className="post-date">March 27, 2022</span>
          </div>
          <h3 className="post-title">
            <a href="https://blog-post.html">CSS Float: A Tutorial</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

function PostWidget() {
  return (
    <div className="post post-widget">
      <a href="blog-post.html" className="post-img">
        <img src={SmallImg} alt="" />
      </a>
      <div className="post-body">
        <h3 className="post-title">
          <a href="blog-post.html">
            Tell-A-Tool: Guide to Web Design And Development Tools
          </a>
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
          <a href="https://category.html" className="post-category cat-3">
            React JS
          </a>
          <span className="post-date">March 27, 2022</span>
        </div>
        <h3 className="post-title">
          <a href="https://blog-post.html">
            Chrome Extension Protects Against JavaScript Side-Chanel Criminal
            Attacks
          </a>
        </h3>
      </div>
    </div>
  );
}

function SampleAD() {
  return (
    <div className="aside-widget text-center">
      <a href="advertiser.website">
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
        <a href="blog-post.hmtl" className="post-img">
          <img src={RowImg} alt="" />
        </a>
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
