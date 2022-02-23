# Search-Engine

Search Engine

##Overview
My attempt to build a very basic search engine from scratch.

### Getting started

#### Define what and how a search engine works

###### What is a search engine?

A search engine is a software system that is designed to search the World Wide Web in a systematic way for particular information specified in a textual web search query. - wiki

###### How does it work?

~~Web crawling - A bot that browses the World Wide Web for the purpose of Web Indexing~~ Big undertaking save for last if at all, look for API's / Public databases. maybe create a database searching bot that querires all of them for search query.

Indexing - The weight of each query the web crawler returns that matches the search query the best.

Searching - Users defined search query.

Types of Searchs (Also relevant for User intent)

- search suggestions
- informational queries (will stick with this one for MVP)
- navigational querires
- transactional queries
- connectivity queries

###### What is the architecture?

Web crawling policy (behavior)

- Selection policy
- restrict

Index design factors

- merge factors
- storage techniques
- index size
- lookup size
- maintenance
- fault tolerance
