import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            background: "linear-gradient(149deg, rgb(163, 173, 4) 22%, rgba(80, 167, 15, 0.62) 62%, rgba(255, 255, 255, 0.976) 100%)"
          }}
        >
          <section style={{
                color: 'white',
                lineHeight: '1',
                maxWidth: '90%',
                margin: '0 auto',
                padding: '20px'
              }}>
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            >
              Lit Stories <span aria-label="fire icon">🔥</span>
            </h1>

          </section>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
