import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box className="bg-secondary" p={10}>
      <h1 className="py-4 text-center text-primary bg-test rounded-4">
        Hi people
      </h1>
    </Box>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
