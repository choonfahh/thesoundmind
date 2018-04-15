import React from 'react';
import SongCard from '../songCard/SongCard';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './recommendationList.css'

class RecommendationList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      songsPlaying: 0,
      songsListened: 0,
      requireOverride: false
    };

    this.handleSongsListened = this.handleSongsListened.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);
    this.handleOverridePlay = this.handleOverridePlay.bind(this);
    this.handleResetOverridePlay = this.handleResetOverridePlay.bind(this);
  }

  handleSongsListened() {
    this.setState(prevState => ({
      songsListened: prevState.songsListened + 1,
      songsPlaying: prevState.songsPlaying - 1
    }));
  }

  handleCount(playing) {
    if (playing === true) {
      this.setState(prevState => ({
        songsPlaying: prevState.songsPlaying + 1,
        requireOverride: false
      }));

    } else {
      this.setState(prevState => ({
        songsPlaying: prevState.songsPlaying - 1,
        requireOverride: false
      }));
    }
  }

  handleResetCount() {
    this.setState({
      songsPlaying: 0
    });
  }

  handleOverridePlay() {
    this.setState(prevState => ({
      requireOverride: true
    }));
  }

  handleResetOverridePlay() {
    this.setState({
      songsPlaying: 1,
      requireOverride: false
    });
  }

  componentWillUnmount() {
    this.props.callbackReset()
  }

  render() {
    let rows = [];

    for (let songCount = 0; songCount <= this.state.songsListened; songCount++) {
      if (songCount === this.props.songs.length) { break; }

      rows.push(
        <SongCard
          song={this.props.songs[songCount]}
          key={this.props.songs[songCount]["id"]}
          recommendationId={this.props.songs[songCount]["id"]}
          queryLength={this.props.songs.length}
          overallState={this.state}
          callbackList={this.handleSongsListened}
          callbackCount={this.handleCount}
          callbackOverridePlay={this.handleOverridePlay}
          callbackResetCount={this.handleResetCount}
          callbackResetOverridePlay={this.handleResetOverridePlay}
          fbUser={this.props.fbUser}
          handleFbLogin={this.props.handleFbLogin}
        />
      );
    }
    return (
      <Grid.Row centered className='page-body'>
        <Grid.Column mobile={16} tablet={12} computer={9} largeScreen={7} widescreen={5}>
        {rows}
      </Grid.Column>
    </Grid.Row>
    );
  }
}

export default RecommendationList;
