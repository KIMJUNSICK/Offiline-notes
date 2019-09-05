import { NOTE_FRAGMENT } from "./fragments";

export const defaults = {
  notes: [
    {
      __typename: "Note",
      key: 1,
      id: 1,
      title: "First Note",
      content: "tired"
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
        createNote(title:String!, content:String!):Note!
        editNote(id:Int!, title:String!, content:String!):Note!
    }
    type Note {
        id:Int!
        title:String!
        content:String!
    }
    `
];

export const resolvers = {
  Query: {
    note: (_, args, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: "Note",
        id: args.id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      return note;
    }
  }
};
