import React from 'react'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <AniLink paintDrip hex="#f5f5f5"
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                      entry={{
                        trigger: ({ exit, node }) =>
                        trackCustomEvent({
                          // string - required - The object that was interacted with (e.g.video)
                          category: "Blogs",
                          // string - required - Type of interaction (e.g. 'play')
                          action: "Click",
                          // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                          label: `${post.frontmatter.title}`
                        })
                      }}
                    >
                      {post.frontmatter.title}
                    </AniLink>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <AniLink paintDrip hex="#f5f5f5" className="button" to={post.fields.slug}
                  entry={{
                    trigger: ({ exit, node }) =>
                    trackCustomEvent({
                      // string - required - The object that was interacted with (e.g.video)
                      category: "Blogs",
                      // string - required - Type of interaction (e.g. 'play')
                      action: "Click",
                      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                      label: `${post.frontmatter.title}`
                    })
                  }}>
                    Keep Reading →
                  </AniLink>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
