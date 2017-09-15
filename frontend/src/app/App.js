import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageMenu from '../pageMenu/PageMenu';
import MainBody from '../mainBody/MainBody';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

class App extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      activity: '',
      mood: '',
      queryResult: ''
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.processQuery = this.processQuery.bind(this);
  }

  handleQueryChange(e, selected) {
    const name = selected.name;

    this.setState({
      [name]: selected.value
    });
  }

  handleQuery(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  handleReset() {
    this.setState({
      location: '',
      activity: '',
      mood: '',
      queryResult: ''
    });
  }

  processQuery() {
    if (this.state.location === "" || this.state.activity === "" || this.state.mood === "") {

    } else {
      let activityString = this.state.activity;

      if (activityString.includes("&")) {
        activityString = activityString.replace("&", "%26");

        let queryLocation = '?location=' + this.state.location;
        let queryActivity = '&activity=' + activityString
        let queryMood = '&mood=' + this.state.mood;
        let queryString = 'api/recommendations' + queryLocation + queryActivity + queryMood;

        this.handleQuery(queryString)
        .then(recommendations => {
          this.setState({
            queryResult: recommendations["data"]
          })
        });

      } else {

        let queryLocation = '?location=' + this.state.location;
        let queryActivity = '&activity=' + this.state.activity;
        let queryMood = '&mood=' + this.state.mood;
        let queryString = 'api/recommendations' + queryLocation + queryActivity + queryMood;

        this.handleQuery(queryString)
        .then(recommendations => {
          this.setState({
            queryResult: recommendations["data"]
          })
        });
      }
    }
  }

  render() {
    return (
      <Grid columns={1} padded centered relaxed
        className='full-height'>

        <PageMenu />

        <MainBody
          location={this.state.location}
          activity={this.state.activity}
          mood={this.state.mood}
          processQuery={this.processQuery}
          handleQueryChange={this.handleQueryChange}
          songs={this.state.queryResult}
          handleReset={this.handleReset}
        />

      </Grid>
    );
  }
}

export default App;
