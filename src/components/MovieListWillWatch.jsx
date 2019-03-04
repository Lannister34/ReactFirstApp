import React, { Component } from "react";

class MovieListWillWatch extends Component {
  render() {
    const willWatchList = this.props.willWatchList;
    const willWatchListRaiting = this.props.willWatchListRaiting;

    return (
      <div className="col-3">
        <div className="fixed-block">
          <h4>Will Watch: {willWatchList.length} movies</h4>
          <ul className="list-group">
            {willWatchList.map((title, i) => {
              return (
                <li className="list-group-item flex-box">
                  <div>{title}</div>
                  <div>{willWatchListRaiting[i]}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieListWillWatch;
