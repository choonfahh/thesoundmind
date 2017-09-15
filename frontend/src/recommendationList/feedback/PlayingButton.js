import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class PlayingButton extends React.Component {
  render() {
    return (
      <Button icon
        onClick={this.props.handlePlay}>
        <Icon name={this.props.state.isPlaying ? "pause" : "play"}
          color={this.props.state.isPlaying ? "grey" : "grey"}
        />
      </Button>
    );
  }
}

export default PlayingButton;
