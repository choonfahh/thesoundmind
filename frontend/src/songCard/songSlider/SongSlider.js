import React from 'react';
import './songSlider.css';

class SongSlider extends React.Component {
  render() {
    return (
      <div className={this.props.state.isPlaying ? "maximized" : this.props.state.isFinished ? "minimized" : "maximized"}>
      <input type="range"
        className="slider"
        onChange={this.props.callbackSeek}
        value={this.props.state.playingProgress}
      />
      </div>
    );
  }
}

export default SongSlider;
