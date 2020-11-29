import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default () => {
   
const getImageData = graphql`
{
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`;

    return (
    <Layout>
        <div>
            <h1>Hello from page 3</h1>
            <h2>Images data</h2>
            <StaticQuery 
                query={getImageData}
                render={data => (
                    <table>
                        <thead>
                            <tr>
                                <th>Relative path</th>
                                <th>Size</th>
                                <th>Extension</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allFile.edges.map(({ node }, idx) => (
                                <tr key={idx}> 
                                    <td>{node.relativePath}</td>
                                    <td>{`${(node.size / 1000).toFixed(1)}kB`}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            />
            <Link to="/page-2" >Go to page 2</Link>
        </div>
    </Layout>
    );
};