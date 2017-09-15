import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecommendationList from '../recommendationList/RecommendationList';
import AskForm from '../askForm/AskForm';

class MainBody extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) =>
          <AskForm
            location={this.props.location}
            activity={this.props.activity}
            mood={this.props.mood}
            songs={this.props.songs}
            processQuery={this.props.processQuery}
            handleQueryChange={this.props.handleQueryChange}
            callbackReset={this.props.handleReset}
          />
        }
      />
        <Route path='/omakase' render={(props) =>
          <RecommendationList
            songs={this.props.songs}
            callbackReset={this.props.handleReset}
          />
        }
      />
      </Switch>
    );
  }
}

export default MainBody;
