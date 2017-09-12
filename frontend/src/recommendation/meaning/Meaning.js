import React from 'react';
import ArtistShoutout from './ArtistShoutout';
import UserShoutoutList from './UserShoutoutList';
import SongStory from './SongStory';
import { Card, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './meaning.css';

class Meaning extends React.Component {
  render() {
    return (
      <Card.Content
        className={this.props.state.cardSize + " meaning"}>

        <ArtistShoutout
          shoutout={this.props.attributes["artist-comment"]}
        />

        <UserShoutoutList
          shoutouts={this.props.attributes["comments"]}
        />

        <Divider />

        <SongStory
          story={this.props.attributes["background-story"]}
        />

      </Card.Content>
    );
  }
}

export default Meaning;
