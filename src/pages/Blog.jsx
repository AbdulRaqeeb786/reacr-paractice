import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
<section className="articles-v3">
  <div className="cd-container cd-max-width-adaptive-lg">
    <ul className="articles-v3__list-grid">
      <li className="articles-v3__item-grid">
        <a href="#0" className="articles-v3__img-wrapper">
          <img src="img/s.webp" alt="Image description" />
        </a>
        <div>
          <h2 className="articles-v3__headline">
            <a href="#0">Strength does not come from winning</a>
          </h2>
          <p className="articles-v3__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            fugit minus! Quisquam repellat, odio maxime velit temporibus eum
            dignissimos quae.
          </p>
          <div className="articles-v3__author">
            <a href="#0" className="articles-v3__author-img">
              <img
                src="img/a.jpg"
                alt="Author picture"
              />
            </a>
            <div className="articles-v3__author-info">
              <p>
                <a href="#0" className="articles-v3__author-name" rel="author">
                  Olivia Gribben
                </a>
              </p>
              <p className="articles-v3__date">
                <time>Oct 4, 2050</time>, — 5 min read
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="articles-v3__item-grid">
        <a href="#0" className="articles-v3__img-wrapper">
          <img src="img/aa.jpg" alt="Image description" />
        </a>
        <div>
          <h2 className="articles-v3__headline">
            <a href="#0">Pills and potions</a>
          </h2>
          <p className="articles-v3__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            labore, nobis impedit alias sint consequuntur sed! Excepturi
            delectus voluptatum laboriosam recusandae eaque ex cupiditate
            facilis. Autem, labore cumque. Provident beatae perferendis aperiam.
          </p>
          <div className="articles-v3__author">
            <a href="#0" className="articles-v3__author-img">
              <img
                src="img/f.jpg"
                alt="Author picture"
              />
            </a>
            <div className="articles-v3__author-info">
              <p>
                <a href="#0" className="articles-v3__author-name" rel="author">
                  Olivia Gribben
                </a>
              </p>
              <p className="articles-v3__date">
                <time>Oct 4, 2050</time>, — 5 min read
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="articles-v3__item-grid">
        <a href="#0" className="articles-v3__img-wrapper">
          <img src="img/a.jpg" alt="Image description" />
        </a>
        <div>
          <h2 className="articles-v3__headline">
            <a href="#0">I can’t possibly be beat</a>
          </h2>
          <p className="articles-v3__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            nihil rem aliquid perferendis delectus in esse praesentium
            necessitatibus rerum consectetur!
          </p>
          <div className="articles-v3__author">
            <a href="#0" className="articles-v3__author-img">
              <img
                src="img/aa.jpg"
                alt="Author picture"
              />
            </a>
            <div className="articles-v3__author-info">
              <p>
                <a href="#0" className="articles-v3__author-name" rel="author">
                  Olivia Gribben
                </a>
              </p>
              <p className="articles-v3__date">
                <time>Oct 4, 2050</time>, — 5 min read
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>


  )
}

export default Blog
