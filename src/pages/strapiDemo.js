import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Heading } from "@chakra-ui/layout"

const StrapiDemo = ({ data }) => {
  console.log({ data })

  return (
    <Layout>
      <Heading as="h1">Static build from Strapi</Heading>
      {data.messages.edges.map(({ node }) => (
        <p key={node.greeting}>{node.greeting}</p>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    messages: allStrapiMessages {
      edges {
        node {
          greeting
        }
      }
    }
  }
`

export default StrapiDemo
