import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ReviewPostTemplate extends Component {
  render() {
    const review = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <SEO
          title={review.frontmatter.title}
          description={review.frontmatter.description || review.excerpt}
        />
        <h1>{review.frontmatter.title}</h1>
        <p>{post.frontmatter.author}</p>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: review.html }}></div>
      </Layout>
    )
  }
}

export default ReviewPostTemplate

export const pageQuery = graphql`
  query ReviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        type
        author
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
