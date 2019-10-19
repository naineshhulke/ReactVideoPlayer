import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import { Button } from "reactstrap";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm"
};

export default class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie
    };

    this.load = this.load.bind(this);
    this.seek = this.seek.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className="py-3">
          <Button onClick={this.load} className="mr-3">
            load()
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.seek(50)} className="mr-3">
            currentTime = 50
          </Button>
        </div>
        <div>State</div>
      </div>
    );
  }
}
