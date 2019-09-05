export const defaults = {
  notes: []
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

export const resolvers = {};
