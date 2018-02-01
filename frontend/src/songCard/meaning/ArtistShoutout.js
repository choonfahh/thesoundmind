import React from 'react';
import { List, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ArtistShoutout extends React.Component {
  render() {
    if (this.props.state.adWillingness) {
      return (
        <List
          className="artist-shoutout">
          <List.Item>
            <List.Header size="small">
              A personal message from the artist to you:
            </List.Header>

            <List.List>
              <List.Item>

                <List.Content>
                  <i>Thank you for indicating! Coming soon :)</i>
                </List.Content>

              </List.Item>
            </List.List>

          </List.Item>
        </List>
      );
    } else {
      return (
        <List
          className="artist-shoutout">
          <List.Item>
            <List.Header size="small">
              A personal message from the artist to you:
            </List.Header>

            <List.List>
              <List.Item>

                <List.Content>

                  <Button size="small" color="blue" basic animated
                    onClick={this.props.handleAdWillingness}>

                    <Button.Content visible>
                      Want to find out?
                    </Button.Content>

                    <Button.Content hidden>
                      Yes!
                    </Button.Content>
                    
                  </Button>

                </List.Content>

              </List.Item>
            </List.List>

          </List.Item>
        </List>
      )
    }
  }
}

export default ArtistShoutout;
