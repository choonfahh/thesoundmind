import React from 'react';
import SongInfo from './songInfo/SongInfo';
import Meaning from './meaning/Meaning';
import Rating from './rating/Rating';
import SongSource from './songSource/SongSource';
import SongSlider from './songSlider/SongSlider';
import Feedback from './feedback/Feedback';
import { Card, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class SongCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cardSize: "maximized",
      isFavorite: false,
      isFinished: false,
      isLiked: false,
      isPlaying: false,
      isSeeking: false,
      isSkipped: false,
      isToggleOn: true,
      isUnlocked: false,
      seconds: 30,
      playingProgress: 0,
      isReplacing: false
    };

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.parseSeek = this.parseSeek.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleUnlock = this.handleUnlock.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  countDown() {
    if (this.state.seconds > 0) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1
      }));
    }
  }

  handleFavorite() {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  }

  handleFinish() {
    if (!this.state.isFinished) {
      this.setState({
        isFinished: true,
        isPlaying: false,
        isToggleOn: false,
        cardSize: "minimized"
      });

      this.props.callbackList();

    } else {
      this.setState({
        isPlaying: false,
        isToggleOn: false,
        cardSize: "minimized"
      });
    }
  }

  handleLike() {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked
    }));
  }

  handlePlay() {
    if (!this.state.isPlaying) {

      if (this.props.overallState.songsPlaying === 1) {
        this.setState({
          isReplacing: true
        });

        this.props.callbackOverridePlay();

      } else {
        this.setState({
          isPlaying: true
        });

        const playing = true;
        this.props.callbackCount(playing);

      }
    } else {
      this.setState({
        isPlaying: false
      });

      const playing = false;
      this.props.callbackCount(playing);

    }
  }

  handleProgress(updatedProgress) {
    if (!this.state.isSeeking) {
      this.setState({
        playingProgress: updatedProgress
      });

    } else {
      this.setState({
        playingProgress: updatedProgress,
        isSeeking: false
      });
    }
  }

  handleSkip() {
    this.setState(prevState => ({
      isPlaying: false,
      isSkipped: true
    }));

    this.props.callbackList();
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    if (this.state.cardSize === "maximized") {
      this.setState(prevState => ({
        cardSize: "minimized"
      }));

    } else {
      this.setState(prevState => ({
        cardSize: "maximized"
      }));
    }
  }

  handleUnlock() {
    this.setState(prevState => ({
      isUnlocked: !prevState.isUnlocked
    }));
  }

  parseSeek(e) {
    let seekValue = e.target.value;

    this.setState({
      isSeeking: true,
      playingProgress: seekValue
    });
  }

  componentDidMount() {
    this.timerDisplay = setInterval(
      () => this.countDown(), 1000
    );

    this.setState({
      isPlaying: true
    });

    const playing = true;
    this.props.callbackCount(playing);
  }

  handleInteraction(endpoint) {
    //return new Promise((resolve, reject) => {
      window.fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(
          {
            "data":
            {
              "type"  : "interactions",
              "attributes": {
                "recommendation-id": this.props.recommendationId,
                "user-id": this.props.fbUser,
                "contribute": 0,
                "impression": 1,
                "skip": this.state.isSkipped ? 1 : 0,
                "info-seen": this.state.seconds === 0 ? 1 : 0,
                "unlock": this.state.isUnlocked ? 1 : 0,
                "like": this.state.isLiked ? 1 : 0,
                "favorite": this.state.isFavorite ? 1 : 0
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.overallState.requireOverride === true) {
      this.setState({
        isPlaying: false
      });

      this.props.callbackResetCount();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isReplacing !== prevState.isReplacing) {
      this.setState({
        isPlaying: true,
        isReplacing: false
      });

      this.props.callbackResetOverridePlay();
    }
  }

  componentWillUnmount() {
    this.handleInteraction('api/interactions');
    clearInterval(this.timerDisplay);
  }

  render() {
    return (
      <Transition
        visible={!this.state.isSkipped}
        animation='fly left' duration={1000}>

        <Card fluid raised
          className="recommendation-card">

          <SongInfo
            attributes={this.props.song["attributes"]}
            state={this.state}
            handleToggle={this.handleToggle}
            handleUnlock={this.handleUnlock}
          />

          <Meaning
            attributes={this.props.song["attributes"]}
            state={this.state}
          />

          <Rating
            attributes={this.props.song["attributes"]}
            state={this.state}
            handleFavorite={this.handleFavorite}
            handleLike={this.handleLike}
          />

          <SongSource
            attributes={this.props.song["attributes"]}
            state={this.state}
            callbackFinish={this.handleFinish}
            callbackProgress={this.handleProgress}
          />

          <SongSlider
            state={this.state}
            callbackSeek={this.parseSeek}
          />

          <Feedback
            state={this.state}
            overallState={this.props.overallState}
            queryLength={this.props.queryLength}
            handleFavorite={this.handleFavorite}
            handleLike={this.handleLike}
            handlePlay={this.handlePlay}
            handleSkip={this.handleSkip}
            fbUser={this.props.fbUser}
            handleFbLogin={this.props.handleFbLogin}
          />

        </Card>
      </Transition>
    );
  }
}

export default SongCard;
