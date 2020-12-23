import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ColorSwitch } from "./ColorSwitch"
import { useColorModeValue as colorMode, chakra } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <chakra.header className="mb-6 bg-secondary dark:bg-pink-400">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="m-0 text-2xl">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ColorSwitch />
    </div>
  </chakra.header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
