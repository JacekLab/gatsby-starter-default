/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "./header";

const GET_SITEMETADATA = graphql`
{
  site {
    siteMetadata {
      title
      author
      description
    }
  }
}
`;

const Layout = ({ children }) => {
  <StaticQuery
    query={GET_SITEMETADATA}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMedatada.title} />
      </>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout