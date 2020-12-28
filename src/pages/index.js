import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, useColorModeValue as colorMode, chakra } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      className="css-u024n4 space-y-11"
      bg={colorMode("searchBg", "modes.dark.headerBg")}
      p={10}
    >
      <h1 className="py-12 text-xl font-black text-center uppercase dark:text-modes-dark-searchResultsHeaderBg rounded-4 text-fuchsia-600 bg-test">
        Hi people
      </h1>
    </Box>
    <chakra.p
      fontSize="4xl"
      className="block my-5 space-x-6 space-y-10 text-2xl font-semibold leading-10 transition-shadow duration-200 opacity-70 w-96 h-9 "
    >
      Welcome to your new Gatsby site.
    </chakra.p>
    <p className="space-y-3">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
