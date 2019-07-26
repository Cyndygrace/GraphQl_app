//require the main graphql
const graphql = require('graphql');

//in creating our schema, 

//We destructure graphql to obtain the graphql object data template
//next we destructure graphql to get the string
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//dummy data
var books = [
{name: 'Name of the wind', genre: 'Fantasy', id: '1'},
{name: 'The Final Empire', genre: 'Fantasy', id: '2'},
{name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
]

//define a type
const BookType = new GraphQLObjectType({
  name :'Book',
  //when we have multiple types,and they have references to one another, unless we wrap those fields in a function, one type might not necessarily know what another typr is. so that when we have multiple types, it will help prevent reference errors.
  field : () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
})


//next we defined root query, how user can easily get data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  // each one of the fields can be a type of root query
  fields: {
    // query for a particular book
    book: {
      type: BookType,
      args:{id : {type: GraphQLString}},
      resolve(parent, args) {
        //code to get data from db/other source
      }
    }
  }
  });
 
  module.exports = new GraphQLSchema({
    query: RootQuery
});
 
 