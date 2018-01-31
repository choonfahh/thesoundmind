/*global FB*/

import React from 'react';
import adBlocker from 'just-detect-adblock'
import { Grid } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import PageMenu from '../pageMenu/PageMenu';
import MainBody from '../mainBody/MainBody';
import AdblockInstruction from '../adblockInstruction/AdblockInstruction';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

class App extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      activity: '',
      mood: '',
      queryResult: '',
      fbUserId: '',
      fbUserName: '',
      fbUserEmail: ''
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.processLoginQuery = this.processLoginQuery.bind(this);
    this.processQuery = this.processQuery.bind(this);
    this.handleFbLogin = this.handleFbLogin.bind(this);
    this.handleFbLogout = this.handleFbLogout.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.reloadPage = this.reloadPage.bind(this);

  }

  componentDidMount() {
    FB.getLoginStatus(function(fbResponse) {
      console.log(fbResponse)

      if (fbResponse.status === 'connected') {
        FB.api('/me', {fields: 'name, picture'}, function(userInfo) {
          console.log(userInfo);

          this.setState({
            fbUserId: fbResponse.authResponse.userID,
            fbUserName: userInfo.name
          });

        }.bind(this));

      } else if (fbResponse.status === 'not_authorized') {
        console.log('not authorized');
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        console.log('not logged in');
        // the user isn't logged in to Facebook.
      }
    }.bind(this));
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

  handleUser(endpoint) {
    //return new Promise((resolve, reject) => {
      window.fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(
          {
            "data":
            {
              "type"  : "users",
              "attributes": {
                "fb-id" : this.state.fbUserId,
                "name"  : this.state.fbUserName,
                "email" : this.state.fbUserEmail
              }
            }
          }
        ),
        headers: {
          "Content-Type": "application/vnd.api+json"
        },
        credentials: "same-origin"
      })
      // how do I resolve a 204 response?
      //.then(response => response.json())
      //.then(json => resolve(json))
      //.catch(error => reject(error))
    //})
  }

  handleReset() {
    this.setState({
      location: '',
      activity: '',
      mood: '',
      queryResult: ''
    });
  }

  handleFbLogin() {
    FB.login(function(fbResponse) {
      if (fbResponse.authResponse) {
        console.log(fbResponse);

        FB.api('/me', {fields: 'name, email'}, function(userInfo) {
          console.log(userInfo);

          this.setState({
            fbUserId: fbResponse.authResponse.userID,
            fbUserName: userInfo.name,
            fbUserEmail: userInfo.email
          });

          this.handleUser('api/users');

        }.bind(this));

      } else {
        console.log('User cancelled login or did not fully authorize.');
        this.handleReset();
        window.history.back();
      }
    }.bind(this), {scope: 'public_profile,email'});

  }

  handleFbLogout() {
    FB.logout(function(response) {

      this.setState({
        fbUserId: '',
        fbUserName: '',
        fbUserEmail: ''
      });

      console.log('User logged out');

    }.bind(this));
  }

  processLoginQuery() {
    this.handleFbLogin();
    this.processQuery();
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

  reloadPage() {
    window.location.reload();
  }

  render() {
    if(adBlocker.isDetected()) {
      return (
        <BrowserRouter>
          <Grid columns={1} padded centered relaxed
            className='full-height'>

            <PageMenu
              fbUser={this.state.fbUserId}
              handleFbLogout={this.handleFbLogout}
            />

            <MainBody
              location={this.state.location}
              activity={this.state.activity}
              mood={this.state.mood}
              fbUser={this.state.fbUserId}
              processQuery={this.processQuery}
              handleQueryChange={this.handleQueryChange}
              songs={this.state.queryResult}
              handleReset={this.handleReset}
              processLoginQuery={this.processLoginQuery}
              handleFbLogin={this.handleFbLogin}
            />

          </Grid>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Grid columns={1} padded centered relaxed
            className='full-height'>

            <PageMenu
              fbUser={this.state.fbUserId}
              handleFbLogout={this.handleFbLogout}
            />

            <AdblockInstruction
              reloadPage={this.reloadPage}
            />

          </Grid>
        </BrowserRouter>
      );
    }

  }
}

export default App;
