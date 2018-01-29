import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SongInfo extends React.Component {
  render() {
    if (this.props.state.seconds === 0) {
      if ((this.props.state.playingProgress === 0 && !this.props.state.isFinished) || this.props.state.isSeeking) {
        return (
          <Card.Content
            className="song-info">

            <Button basic circular floated="right" size="large"
              icon={this.props.state.isToggleOn ? "angle double down" : "angle double left"}
              onClick={this.props.handleToggle}
            />

            <Card.Header>
              {this.props.attributes["song-title"]}
            </Card.Header>

            <Card.Meta textAlign="right">
              <a href={this.props.attributes["profile-url"]}>
                {this.props.attributes["artist-name"]}
              </a>
              <i> | Now Loading</i>
            </Card.Meta>

          </Card.Content>
        );
      }
      return (
          <Card.Content
            className="song-info">

            <Button basic circular floated="right" size="large"
              icon={this.props.state.isToggleOn ? "angle double down" : "angle double left"}
              onClick={this.props.handleToggle}
            />

            <Card.Header>
              {this.props.attributes["song-title"]}
            </Card.Header>

            <Card.Meta>
              <a href={this.props.attributes["profile-url"]}>
                {this.props.attributes["artist-name"]}
              </a>
            </Card.Meta>

          </Card.Content>
        );
    } else {
      if ((this.props.state.playingProgress === 0 && !this.props.state.isFinished) || this.props.state.isSeeking) {
        return (
          <Card.Content
            className="song-info">

            <Card.Header>
              What's this song?
            </Card.Header>

            <Card.Meta>
              Find out in {this.props.state.seconds}s
              <i> | Now Loading</i>
            </Card.Meta>

          </Card.Content>
        );
      }
        return (
          <Card.Content
            className="song-info">

            <Card.Header>
              What's this song?
            </Card.Header>

            <Card.Meta>
              Find out in {this.props.state.seconds}s
            </Card.Meta>

          </Card.Content>
        );
    }
  }
}

export default SongInfo;
