import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  render() {
    const films = this.props.films;
    return (
      <div className="col-9">
        <div className="row cardList">
          {films.map(film => {
            return (
              <div className="col-4 mb-4">
                <MovieItem
                  addWillWatchMovie={this.props.addWillWatchMovie}
                  removeWillWatchMovie={this.props.removeWillWatchMovie}
                  card={film}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
