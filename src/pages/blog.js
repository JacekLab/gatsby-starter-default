import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { node } from 'prop-types';

const getMarkdownPosts = graphql`
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
        title
        date
        }
        excerpt
      }
    }
  }
}`;

export default () => (
  <Layout>
    <div>
      <h1 style={{ display: 'inline-block', borderBottom: '1px solid'}}>
        My gatsby blog
      </h1>
      <StaticQuery 
        query={getMarkdownPosts}
        render={data => (
          <>
            <h2>Posts count: {data.allMarkdownRemark.totalCount}</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
                <h3>
                  <span style={{ color: '#bbb', display: 'block'}}>
                    {node.frontmatter.date}
                  </span>
                  {node.frontmatter.title}
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </>
        )}
      />
    </div>
  </Layout>
)