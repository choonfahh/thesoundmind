import React from 'react';
import SongInfo from './songInfo/SongInfo';
import Meaning from './meaning/Meaning';
import Rating from './rating/Rating';
import SongSource from './songSource/SongSource';
import SongSlider from './songSlider/SongSlider';
import Feedback from './feedback/Feedback';
import { Card, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class RecommendationCard extends React.Component {
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
      isSkipped: !prevState.isSkipped
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
          />

        </Card>
      </Transition>
    );
  }
}

export default RecommendationCard;
