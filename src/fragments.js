import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
  fragment NoteParts on NOTE {
    id
    title
    content
  }
`;
