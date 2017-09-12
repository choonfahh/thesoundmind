import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SkipButton extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleSkip}>
        <Icon name='step forward'
        />
      </Button>
    );
  }
}

export default SkipButton;
