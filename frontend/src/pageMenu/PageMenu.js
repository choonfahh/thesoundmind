import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './pageMenu.css';

class PageMenu extends React.Component {
  render() {
    return (
      <Grid.Row color='purple' className='menu-header'>
        <Grid.Column mobile={16} tablet={15} computer={12} largeScreen={10} widescreen={8}>

          <Link to='/'>
          <div className='menu-left'>
            <Header as='h3' inverted
              content='TheSoundMind.'
            />
          </div>
        </Link>

          <div className='menu-right'>

            <Link to='/'>
            <div className='menu-button'>
              <Icon link size='large'
                name='search'
              />
            </div>
            </Link>

            <div className='menu-button'>
              <Icon link  size='large'
                name='heart outline'
              />
            </div>

            <div className='menu-button'>
              <Icon link size='large'
                name='user outline'
              />
            </div>
          </div>

        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default PageMenu;
