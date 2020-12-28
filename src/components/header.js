import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ColorSwitch } from "./ColorSwitch"
import { useColorModeValue as colorMode, chakra } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <header className="dark:bg-pink-400 mb-6 bg-secondary py-5 px-5">
    <div>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
