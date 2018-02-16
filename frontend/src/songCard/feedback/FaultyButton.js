import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FaultyButton extends React.Component {
  render() {
    if (this.props.state.isFaulty === true) {
      return (
        <Button icon>
          <h5>I don't hear any music playing</h5>
        </Button>
      );
    } else {
      return (
        <Button icon
          onClick={this.props.handleFaulty}>
          <h5>I don't hear any music playing</h5>
        </Button>
      );
    }
  }
}

export default FaultyButton;
