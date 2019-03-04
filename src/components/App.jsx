import React, { Component } from "react";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesWillWatch: [],
      moviesWillWatchRaiting: []
    };
  }

  addWillWatchMovie = (title, rating) => {
    this.setState(prevState => ({
      moviesWillWatch: prevState.moviesWillWatch.concat(title),
      moviesWillWatchRaiting: prevState.moviesWillWatchRaiting.concat(rating)
    }));
  };

  removeWillWatchMovie = title => {
    this.setState(prevState => {
      prevState.moviesWillWatchRaiting.splice(
        prevState.moviesWillWatch.indexOf(title),
        1
      );
      prevState.moviesWillWatch.splice(
        prevState.moviesWillWatch.indexOf(title),
        1
      );
      return {
        moviesWillWatch: prevState.moviesWillWatch,
        moviesWillWatchRaiting: prevState.moviesWillWatchRaiting
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4 content-block">
          <MovieList
            addWillWatchMovie={this.addWillWatchMovie}
            films={this.props.films}
            removeWillWatchMovie={this.removeWillWatchMovie}
          />
          <MovieListWillWatch
            willWatchList={this.state.moviesWillWatch}
            willWatchListRaiting={this.state.moviesWillWatchRaiting}
          />
        </div>
      </div>
    );
  }
}

export default App;
