import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Icon, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './pageMenu.css';

class PageMenu extends React.Component {

  render() {
    if (this.props.fbUser === "") {
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

        </div>

      </Grid.Column>
    </Grid.Row>
  )
} else {
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
        <Icon link size='large'
          name='heart outline'
        />
      </div>

      <Modal size="mini"
        closeIcon
        trigger={<div className='menu-button'><Icon link size='large' name='user outline' /></div>}>

        <Modal.Content content="Do you want to logout of your account?" />

        <Modal.Actions>
          <Button size="small" color='facebook' onClick={this.props.handleFbLogout}>
            <Button.Content>
              <Icon name='facebook' />
              Logout
            </Button.Content>
          </Button>
        </Modal.Actions>

      </Modal>

    </div>

  </Grid.Column>
</Grid.Row>
)
}
}
}

export default PageMenu;
