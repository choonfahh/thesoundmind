import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ArtistShoutout extends React.Component {
  render() {
    return (
      <List
        className="artist-shoutout">
        <List.Item>
          <List.Header size="small">
            A personal message from the artist to you:
          </List.Header>

          <List.List>
            <List.Item>

              <List.Icon size="small" name="quote left" />

              <List.Content>
                <i>Artists promote their own song here by telling the listener why they feel this song is suitable for their moment right now.</i>
              </List.Content>

            </List.Item>
          </List.List>

        </List.Item>
      </List>
    );
  }
}

export default ArtistShoutout;
