import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FavoriteButton extends React.Component {
  render() {
    return (
      <Button icon
        onClick={this.props.handleFavorite}>
        <Icon name={this.props.state.isFavorite ? "heart" : "empty heart"}
          color={this.props.state.isFavorite ? "red" : "grey"}
        />
      </Button>
    );
  }
}

export default FavoriteButton;
