import React from 'react';
import { Desktop, Tablet, Mobile, desktopBrowser, mobileBrowser } from './DeviceBrowser.js';
import BrowserDetection from 'react-browser-detection';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Icon, Segment } from 'semantic-ui-react';
import './adblockInstruction.css';

class AdblockInstruction extends React.Component {

  render() {
    return (
      <Grid.Row centered className='page-body'>
        <Grid.Column mobile={16} tablet={11} computer={9} largeScreen={7} widescreen={5} id='adblock-body-alignment'>

          <Segment basic textAlign="center" id='instruction-alignment'>

            <Icon name='warning circle' size='massive' inverted color='red' />

              <Desktop>
                  <BrowserDetection>{ desktopBrowser }</BrowserDetection>
              </Desktop>

              <Tablet>
                  <BrowserDetection>{ mobileBrowser }</BrowserDetection>
              </Tablet>

              <Mobile>
                  <BrowserDetection>{ mobileBrowser }</BrowserDetection>
              </Mobile>

              <p />

              <Button size="medium" color="blue" animated onClick={this.props.reloadPage}>

                <Button.Content visible>
                  Refresh Page
                </Button.Content>

                <Button.Content hidden>
                  <Icon name='refresh' />
                </Button.Content>

              </Button>

            </Segment>

          </Grid.Column>
        </Grid.Row>
    );
  }
}

export default AdblockInstruction;
