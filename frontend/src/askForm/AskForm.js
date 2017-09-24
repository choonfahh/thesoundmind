import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { location, activity, mood } from './AskOptions';
import 'semantic-ui-css/semantic.min.css';
import './askForm.css';

class AskForm extends React.Component {
  componentWillUnmount() {
    this.props.callbackReset()
  }

  render() {
    if (this.props.location === "" || this.props.activity === "" || this.props.mood === "") {
      return (
        <Grid.Row centered className='page-body'>
          <Grid.Column mobile={16} tablet={11} computer={9} largeScreen={7} widescreen={5} id='ask-body-alignment'>

            <Segment basic textAlign="center" id='ask-form-alignment'>

              <Header size="large"
                content="What's your moment?"
                subheader="In return, we'll play a music playlist tailored just for you right now." />
                <Form id='input-form'>

                  <Form.Select fluid required
                    name="location"
                    options={location}
                    placeholder='Location'
                    onChange={this.props.handleQueryChange}
                  />
                  <Form.Select fluid required
                    name="activity"
                    options={activity}
                    placeholder='Type of Activity'
                    onChange={this.props.handleQueryChange}
                  />
                  <Form.Select fluid required
                    name="mood"
                    options={mood}
                    placeholder='Mood'
                    onChange={this.props.handleQueryChange}
                  />

                  <Form.Button disabled size="large" color="purple"
                    content="Fill up your moment!"
                  />

                </Form>
              </Segment>

            </Grid.Column>
          </Grid.Row>
        );
      } else {

        if (this.props.fbUser !== "") {
          return(
            <Grid.Row centered className='page-body'>
              <Grid.Column mobile={16} tablet={11} computer={9} largeScreen={7} widescreen={5} id='ask-body-alignment'>

                <Segment basic textAlign="center" id='ask-form-alignment'>

                  <Header size="large"
                    content="What's your moment?"
                    subheader="In return, we'll play a music playlist tailored just for you right now." />
                    <Form id='input-form'>

                      <Form.Select fluid required
                        name="location"
                        options={location}
                        placeholder='Location'
                        onChange={this.props.handleQueryChange}
                      />
                      <Form.Select fluid required
                        name="activity"
                        options={activity}
                        placeholder='Type of Activity'
                        onChange={this.props.handleQueryChange}
                      />
                      <Form.Select fluid required
                        name="mood"
                        options={mood}
                        placeholder='Mood'
                        onChange={this.props.handleQueryChange}
                      />


                      <Link to='/omakase'>
                      <Button size="medium" color="purple" animated onClick={this.props.processQuery}>

                        <Button.Content visible>
                          Click here to get your playlist now!
                        </Button.Content>

                        <Button.Content hidden>
                          <Icon name='play' />
                        </Button.Content>

                      </Button>
                      </Link>

                  </Form>
                </Segment>

              </Grid.Column>
            </Grid.Row>
          )
        } else {
          return (
            <Grid.Row centered className='page-body'>
              <Grid.Column mobile={16} tablet={11} computer={9} largeScreen={7} widescreen={5} id='ask-body-alignment'>

                <Segment basic textAlign="center" id='ask-form-alignment'>

                  <Header size="large"
                    content="What's your moment?"
                    subheader="In return, we'll play a music playlist tailored just for you right now." />
                    <Form id='input-form'>

                      <Form.Select fluid required
                        name="location"
                        options={location}
                        placeholder='Location'
                        onChange={this.props.handleQueryChange}
                      />
                      <Form.Select fluid required
                        name="activity"
                        options={activity}
                        placeholder='Type of Activity'
                        onChange={this.props.handleQueryChange}
                      />
                      <Form.Select fluid required
                        name="mood"
                        options={mood}
                        placeholder='Mood'
                        onChange={this.props.handleQueryChange}
                      />

                      <Link to='/omakase'>
                      <Button size="medium" color='facebook' animated onClick={this.props.processLoginQuery}>
                        <Button.Content visible>
                        <Icon name='facebook' />
                        Continue with Facebook
                        </Button.Content>

                        <Button.Content hidden>
                          <Icon name='play' />
                        </Button.Content>

                      </Button>
                      </Link>


                      <Divider horizontal>Or</Divider>

                      <Link to='/omakase'>
                      <Button size="small" color="purple" animated onClick={this.props.processQuery}>
                        <Button.Content visible>
                          Click here to try out first
                        </Button.Content>

                        <Button.Content hidden>
                          <Icon name='play' />
                        </Button.Content>

                      </Button>
                      </Link>


                  </Form>
                </Segment>

              </Grid.Column>
            </Grid.Row>
          )
        }
      }
    }
  }

export default AskForm;
