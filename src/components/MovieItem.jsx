import React, { Component } from "react";

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      willWatch: false
    };
  }

  willWatchState() {
    this.setState(prevState => ({
      willWatch: !prevState.willWatch
    }));
  }

  render() {
    const {
      card: { title, backdrop_path: image, vote_average, key }
    } = this.props;
    return (
      <div className="card" key={key}>
        <img
          className="card-img-top"
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt={title}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="cardContent">
            <p className="mb-0">Rating: {vote_average}</p>
            <button
              type="button"
              className={
                this.state.willWatch ? "btn btn-success" : "btn btn-secondary"
              }
              onClick={() => {
                this.state.willWatch
                  ? this.props.removeWillWatchMovie(title)
                  : this.props.addWillWatchMovie(title, vote_average);
                this.willWatchState();
              }}
            >
              Will Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
