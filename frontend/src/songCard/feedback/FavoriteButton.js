import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FavoriteButton extends React.Component {
  constructor (props) {
    super(props)

    this.handleLoginFavorite = this.handleLoginFavorite.bind(this);

  }

  handleLoginFavorite() {
    this.props.handleFbLogin();
    this.props.handleFavorite();
  }

  render() {
    if (this.props.fbUser !== "") {
      return (
        <Button icon
          onClick={this.props.handleFavorite}>
          <Icon name={this.props.state.isFavorite ? "bookmark" : "bookmark outline"}
            color={this.props.state.isFavorite ? "yellow" : "grey"}
          />
        </Button>
      );
    } else {
      return (
        <Modal size="mini"
          trigger={<Button icon><Icon name={this.props.state.isFavorite ? "bookmark" : "bookmark outline"} color={this.props.state.isFavorite ? "yellow" : "grey"}/></Button>}
          closeIcon>

          <Modal.Content content="Sign in now to save your favorite songs into your music library!" />

          <Modal.Actions>
            <Button size="medium" color='facebook' animated onClick={this.handleLoginFavorite}>
              <Button.Content visible>
              <Icon name='facebook' />
              Continue with Facebook
              </Button.Content>

              <Button.Content hidden>
                <Icon name='play' />
              </Button.Content>
            </Button>
          </Modal.Actions>

        </Modal>
      );
    }
  }
}

export default FavoriteButton;
