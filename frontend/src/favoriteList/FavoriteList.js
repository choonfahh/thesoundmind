import React from 'react';
import SongCard from '../songCard/SongCard';
import { Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './favoriteList.css'

class FavoriteList extends React.Component {
  render() {
    return (
      <Grid.Row centered className='page-body'>
        <Grid.Column mobile={16} tablet={12} computer={9} largeScreen={7} widescreen={5}>
        <Segment textAlign="center">
          Your favorites will be shown here!
        </Segment>
      </Grid.Column>
    </Grid.Row>
    )
  }
}

export default FavoriteList;
