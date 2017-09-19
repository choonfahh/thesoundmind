import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SongStory extends React.Component {
  render() {
    return (
      <List
        className="song-story">
        <List.Item>
          <List.Header size="small">
            What's the story behind this song?
          </List.Header>

          <List.List>
            <List.Item>

              <List.Icon size="big" name="question circle outline" />

              <List.Content verticalAlign="middle">
                {this.props.story}
              </List.Content>

            </List.Item>
          </List.List>

        </List.Item>
      </List>
    );
  }
}

export default SongStory;
