import React from 'react';
import ReactPlayer from 'react-player';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './songSource.css';

class SongSource extends React.Component {
  constructor (props) {
    super(props)

    this.parseProgress = this.parseProgress.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
  }

  parseProgress({played}) {
    if (this.props.state.isSeeking) {
      played = this.props.state.playingProgress / 100;
      this.player.seekTo(played);

      const updatedProgress = played * 100;
      this.props.callbackProgress(updatedProgress);

    } else {
      const updatedProgress = played * 100;

      this.props.callbackProgress(updatedProgress);
    };
  }

  handleSeek() {
    if (this.props.state.isSeeking) {
      this.player.seekTo(this.props.state.playingProgress)
    };
  }

  render() {
    return (
        <ReactPlayer
          ref={player => {this.player = player}}
          url={this.props.attributes["playback-url"]}
          playing={this.props.state.isPlaying}
          loop={true}
          height={1}
          width={1}
          onEnded={this.props.callbackFinish}
          onProgress={this.parseProgress}
        />
    );
  }
}

export default SongSource;
