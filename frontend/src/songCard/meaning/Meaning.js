import React from 'react';
import ArtistShoutout from './ArtistShoutout';
import UserShoutoutList from './UserShoutoutList';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './meaning.css';

class Meaning extends React.Component {
  render() {
    return (
      <Card.Content
        className={this.props.state.cardSize + " meaning"}>

        <ArtistShoutout
        handleAdWillingness={this.props.handleAdWillingness}
        state={this.props.state}
      />

        <UserShoutoutList
          shoutouts={this.props.attributes["comments"]}
        />

      </Card.Content>
    );
  }
}

export default Meaning;
