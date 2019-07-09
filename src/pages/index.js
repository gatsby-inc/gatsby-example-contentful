import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.message.childContentfulContentMessageTextNode.message}</h1>
    <p>The above message is from Contentful <span role="img" aria-label="Hand pointing up">☝️</span></p>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    message:contentfulContent(name:{eq:"hello-world"}) {
      name
      childContentfulContentMessageTextNode {
        message
      }
    }
  }
`