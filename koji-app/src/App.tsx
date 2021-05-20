import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Article from './parts/Article'
import Home from './parts/Home'


// describe data type into appState
type AppState = {
  err: any,
  isLoaded: boolean,
  articles: [{
    userId: number,
    id: number,
    title: string,
    body: string
  }]
}

class App extends React.Component<{}, AppState>  {
  constructor(props: any) {
    super(props)
    this.state = {
      err: null,
      isLoaded: false,
      articles: [{
        userId: 0,
        id: 0,
        title: "",
        body: ""
      }]
    }
  }

  //  load data into app state beforez rendered
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/Linteum/articlestestDB/posts")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            articles: data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            err: error
          });
        }
      )
  }

  render() {
    const { articles } = this.state

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="articles">

              <Switch>

                {/* read trough articles and create a Route and element for each */}
                {articles.map((articleData) => {
                  const articlePath = `/article/${articleData.id}`

                  const articleRoute = (
                    <Route path={articlePath}>
                      <Article article={articleData}></Article>
                    </Route>)
                  return articleRoute

                })}
                <Route path="/">
                  <Home articles={articles}></Home>
                </Route>

              </Switch>
            </div>
          </header>
        </div>

      </Router>
    )
  }
}

export default App;
