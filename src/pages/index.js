import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, useColorModeValue as colorMode, chakra } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box className="" bg={colorMode("searchBg", "modes.dark.headerBg")} p={10}>
      <h1 className="py-12 text-center uppercase dark:text-modes-dark-searchResultsHeaderBg text-fuchsia-600 bg-test rounded-4">
        Hi people
      </h1>
    </Box>
    <chakra.p fontSize="4xl">Welcome to your new Gatsby site.</chakra.p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
