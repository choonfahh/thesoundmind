import React from 'react';
import LikeButton from './LikeButton';
import PlayingButton from './PlayingButton';
import SkipButton from './SkipButton';
import FaultyButton from './FaultyButton';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Feedback extends React.Component {
  render() {
    if (this.props.state.isFinished && this.props.queryLength === this.props.overallState.songsListened) {
      return (
        <Button.Group basic size='big' fluid
          className="feedback">

          <LikeButton fluid compact
            state={this.props.state}
            handleLike={this.props.handleLike}
          />

          <PlayingButton fluid compact
            state={this.props.state}
            handlePlay={this.props.handlePlay}
          />

        </Button.Group>
      );
    } else if (this.props.state.isFinished) {
      return (
        <Button.Group basic size='big' fluid
          className="feedback">

          <LikeButton fluid compact
            state={this.props.state}
            handleLike={this.props.handleLike}
          />

        </Button.Group>
      );
    } else {
      return (
        <Button.Group basic size='big' fluid
          className="feedback">

          <LikeButton fluid compact
            state={this.props.state}
            handleLike={this.props.handleLike}
          />

          <PlayingButton fluid compact
            state={this.props.state}
            handlePlay={this.props.handlePlay}
          />

          <SkipButton fluid compact
            state={this.props.state}
            handleSkip={this.props.handleSkip}
          />

          <FaultyButton fluid compact
            state={this.props.state}
            handleFaulty={this.props.handleFaulty}
          />

        </Button.Group>
      );
    }
  }
}

export default Feedback;
