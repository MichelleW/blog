import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="navigation">
      <nav>
        <Link to="/" className="logo">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        Code/
           <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </Link> 
        <Link to="/blog">/ Blog</Link>
      </nav>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
