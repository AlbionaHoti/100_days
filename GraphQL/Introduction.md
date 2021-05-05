Using a GraphQL, as a consumer, or building a GraphQL API.

GraphQL -> Query language, and a runtime for your data.

REST - a way to build an API.

GraphQL - is a way to build an API, sits in front of your API and your request. So, you can still have an API underneath the GraphQL, it's like a different place in the stack how you treat data from the server. 

---
So, what is a spec? A spec describes the capabilities and characteristics of a programming language. We benefit from the language specifications because they supply a common vocabulary and best practices for the community’s use of the language. **GraphQL is a specification for the client-server communication.**

**The** GraphQL spec describes the language and grammar that should be used when writing GraphQL documents.

These rules include:

- How to draft queries,
- How schemas should be defined
- How to validate GraphQL Syntax

It defines the rules for the GraphQL query language as well as the Schema Definition Language.
---

* Open-source and created by Facebook

GraphQL is just a spec, what it can, what it will do. 

* graphql-js -> a javascript implementation of the graphql spec, there are other implementations out there in ruby in java, in go, scala, etc. that implement the spec that facebook created.

* Gives clients the power to describe exactly what data they want

* Strongly typed (think typescript for your data)

* Enables excellent developer tooling and experiences

* Can sit in front of any existing API because its just a query language

* Ecosystem is fantastic

## GraphQL vs REST

### GraphQL

* GraphQL only has one URL. It does not need a resource url + verb combo. The request details are in a POST body (sometimes GET)

### REST

* In REST, the shape and size of the data resource is determined by
the server, with GraphQL its determined by the query (request)

* In REST, you have to make multiple API calls to retrieve relational data, with GraphQL you can start with entry resource and traverse all the connections in one request.

- GraphQL will traverse the query that's being send, and proceeds to the resolvers to go ahead and resolve all the fields for you. That's why is called GraphQL, because it works like a Graph.

* In REST, the shape of the response is determined by whom ever created the server.

* In GraphQL the shape is determined by the query.

* In REST, a single request will execute on `controller` on the server. 
    - 

* In GraphQL a request might execute `MANY resolvers` on the server.
    
    - Executing three resolvers on one query, you'll not have an idea of how many functions are going to run on the server -- that is determined on how the query is looking like, and not what you hardcoded. Not only is the data and the shape dynamic, but the functions that run, as callbacks to your request, are going to be dynamic as well. In what order are they run, and how many are run.
    - GraphQL is like SQL for your API. 

`The resolvers are like controllers.` 

* You're going to send a query up to your server, and that query's information is what the server needs. That query has nothing to do with the URL, it's just a string. 

* Nodemon restarts the server
