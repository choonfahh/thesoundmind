import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Rating extends React.Component {
  render() {
    return (
      <Card.Content
        className={this.props.state.cardSize + " rating"}>
        <Card.Meta>
          {this.props.state.isLiked ? this.props.attributes["like"] + 1 : this.props.attributes["like"]} people liked this song too
        </Card.Meta>
      </Card.Content>
    );
  }
}

export default Rating;
