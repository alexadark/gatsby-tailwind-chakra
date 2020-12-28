import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ls from "local-storage"

import Header from "./header"
import "./layout.css"
import { Devtools } from "@ui-devtools/tailwind"

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useState(ls("chakra-ui-color-mode"))

  useEffect(() => {
    setColorMode(ls("chakra-ui-color-mode"))
  })
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Devtools>
      <div className={colorMode}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </Devtools>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
