import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      bookCount
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;
