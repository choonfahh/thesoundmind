import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Shoutout extends React.Component {
  render() {
    return (
      <List.Item
        className="shoutout">

        <List.Icon size="small" name="quote left" />

        <List.Content>
          <i>{this.props.shoutout["content"]}</i>
        </List.Content>

      </List.Item>
    );
  }
}

export default Shoutout;
