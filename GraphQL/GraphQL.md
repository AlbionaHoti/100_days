### GraphQL Basics & Starting the Server

* rootSchema -> entry schema, the first part of the schema.

The schema as a tree or a graph, there has to be a root. So the rootSchema will be the root.

* ApolloServer

* GraphQL has types

First we need to create types.

* In order to retrieve types

we need to create a type called `Query`

* The `Query` should have a field that allows to query for cats,

- We are adding a field to the `Query` type, called `myCat` and it's return type it's going to be a `Cat` -- in the shape of the `Cat` object.

- Below to the `schema` we're going to tell the schema that the `Query` type is going to be the type `Query` 

- Now that we created a schema with `Cat` type, and we created a `Query` that capable of returning the `Cat` type, we'll have to create the `resolver` that'll resolve that `Cat` type. 

- We need to resolve `Query`, `myCat`
 
