import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FavoriteButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleFavorite}>
        <Icon name={this.props.state.isFavorite ? "checkmark" : "add"}
          color={this.props.state.isFavorite ? "green" : "grey"}
        />
      </Button>
    );
  }
}

export default FavoriteButton;
