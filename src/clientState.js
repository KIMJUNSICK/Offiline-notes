export const defaults = {
  notes: [
    {
      __typename: "Note",
      id: 1,
      title: "First Note",
      contents: "tired"
    }
  ]
};
export const typeDefs = [
  `
    extend schema {
        mutation: Mutation
    }
    extend type Query {
        note(id:Int!):Note
        notes: [Note]!
    }
    type Mutation {
        createNote(title:String!, contents:String!):Note!
        editNote(id:Int!, title:String!, contents:String!):Note!
    }
    type Note {
        id:Int!
        title:String!
        contents:String!
    }
    `
];

export const resolvers = {
  Query: {
    note: (_, variables, { getCacheKey }) => {
      const id = getCacheKey({ __typename: "Note", id: variables.id });
      console.log(id);
      return null;
    }
  }
};
