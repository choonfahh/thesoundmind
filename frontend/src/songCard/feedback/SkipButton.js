import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SkipButton extends React.Component {
  render() {
    if (this.props.state.isSkipped === true) {
      return (
        <Button icon>
          <Icon name='step forward'
          />
        </Button>
      );
    } else {
      return (
        <Button icon
          onClick={this.props.handleSkip}>
          <Icon name='step forward'
          />
        </Button>
      );
    }
  }
}

export default SkipButton;
