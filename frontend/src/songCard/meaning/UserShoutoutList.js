import React from 'react';
import Shoutout from './Shoutout';
import { Card, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class UserShoutoutList extends React.Component {
  render() {
    let rows = [];

    for (let shoutoutCount = 0; shoutoutCount < this.props.shoutouts.length; shoutoutCount++) {
      rows.push(<Shoutout
        shoutout={this.props.shoutouts[shoutoutCount]}
        key={this.props.shoutouts[shoutoutCount]["id"]}
      />
    );
  }

  return (
    <Card.Content
      className="user-shoutout-list">
      <List>
        <List.Item>

          <List.Header size="small">
            Here's why other users thought this song is suitable for you:
          </List.Header>

          <List.List>
            {rows}
          </List.List>

        </List.Item>
      </List>
    </Card.Content>
  );
}
}

export default UserShoutoutList;
