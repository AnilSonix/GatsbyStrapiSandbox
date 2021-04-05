import { Link } from "gatsby"
import React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/strapiDemo">StrapiDemo</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Layout
