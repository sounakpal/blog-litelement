import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <section className="">
    <div
      className="full-width-image margin-top-0"
      style={{
        background: "linear-gradient(149deg, rgba(173,4,44,1) 22%, rgba(167,15,89,0.9444152661064426) 62%, rgba(119,46,114,0.9752275910364145) 100%)"
      }}
    >
      <div style={{
            color: 'white',
            lineHeight: '1',
            maxWidth: '90%',
            margin: '0 auto',
            padding: '20px'
          }}>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        >
          {title}
        </h1>
      </div>
      </div>
      <div className="container section section--gradient">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
            
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
