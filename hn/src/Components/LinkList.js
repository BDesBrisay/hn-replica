import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link'

const GET_LINKS = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => (
  <Query query={GET_LINKS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      console.log("Data: ", data);
      return (
        <div>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </div>
      )
    }}
  </Query>
)

export default LinkList