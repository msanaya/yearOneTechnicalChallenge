import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'
import MovieDetail from './screens/MovieDetail/MovieDetail'
import Chart from './screens/Chart/Chart'



console.log(process.env.REACT_APP_MOVIE_API_KEY)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
        component={Home} />
        <Route exact path="movies/:id"
        component={MovieDetail} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;
