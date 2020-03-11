import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <section className="">
    <div
      className="full-width-image margin-top-0"
      style={{
        background: "linear-gradient(149deg, rgb(173, 4, 44) 22%, rgba(167, 15, 89, 0.61) 62%, rgb(255, 255, 255) 100%)"
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
        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{marginTop: '20px'}}>{description}</h3>
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
  description: PropTypes.string.isRequired,
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
        description={post.frontmatter.description}
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
        description
      }
    }
  }
`
