# Koji Reflection questions

## _Which library will you use to manage the state of the application?_

I would use Redux. I don't know it, but it appears to be the most used, for React app. For a beginner, like me, it will be the  easiest to start with, in my opinion.

## _What pages are needed?_

For this app, I think we will need 6/7 pages  :

    - Login
    - User or Admin Page
    - Browsing Articles
    - Generating Article
    - Article itself(as many there is)
    - Template generating 


## _How will you arrange your navigation?_

As I dicoverded it during the practical part, I would use react-router-dom library to navigate trough the web site. Also I would separate the parts into multiples TSX files to keep the maintaining easier.

## _What are the minimum api requests you will need?_

In this case we will need to CRUD from the user database the article, and the templates databases. 

## _How will you manage the execution of api requests and their asynchronous return?_

I would load datas on page load and stock in into appState by using the componentDidMount method.

## _How will you manage authentication?_

I'm thinking about using auth0-rect library for authentication.
It allows to delegate this part to a third party, and it appears that auth0 servers are really safe et powerfull.

## _You need to implement an optional "dark" version in the application. How will you proceed ?_

Maybe using styled components, would be the solution, by configurate themes components.



