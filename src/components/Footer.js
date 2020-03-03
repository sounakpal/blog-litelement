import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import twitter from '../img/social/twitter.svg'
import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h4 style={{
                      color: "#fff"
                    }}>Advanced Lit</h4>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <AniLink swipe entrtyOffset={80} direction="left" top="entry" to="/" className="navbar-item">
                        Home
                      </AniLink>
                    </li>
                    <li>
                      <AniLink className="navbar-item" swipe entrtyOffset={80} direction="left" top="entry" to="/about">
                        About
                      </AniLink>
                    </li>
                    {/*<li>
                      <AniLink className="navbar-item" swipe entrtyOffset={80} direction="left" top="entry" to="/products">
                        Products
                      </AniLink>
                    </li>
                    <li>
                      <AniLink className="navbar-item" swipe entrtyOffset={80} direction="left" top="entry" to="/contact/examples">
                        Form Examples
                      </AniLink>
                    </li>*/}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <AniLink className="navbar-item" swipe entrtyOffset={80} direction="left" top="entry" to="/blog">
                        Latest Stories
                      </AniLink>
                    </li>
                    <li>
                      <AniLink className="navbar-item" swipe entrtyOffset={80} direction="left" top="entry" to="/contact">
                        Contact
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/sounakpal">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Github" href="https://github.com/sounakpal/blog-litelement">
                  <img 
                    className="fas fa-lg" 
                    src={github} 
                    alt="Github" 
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {/*
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
