import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class LikeButton extends React.Component {
  render() {
    return (
      <Button icon
        onClick={this.props.handleLike}>
        <Icon name={this.props.state.isLiked ? "thumbs up" : "like outline"}
          color={this.props.state.isLiked ? "blue" : "grey"}
        />
      </Button>
    );
  }
}

export default LikeButton;
