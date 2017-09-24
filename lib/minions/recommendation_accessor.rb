module RecommendationAccessor
  attr_accessor :location, :activity, :mood,
                :song_title, :background_story, :playback_url,
                :artist_name, :profile_url, :positive_feedback,
                :artist_content

  def location
    @location = Recommendation.find(id).moment.location
    location = @location
  end

  def activity
    @activity = Recommendation.find(id).moment.activity
    activity = @activity
  end

  def mood
    @mood = Recommendation.find(id).moment.mood
    mood = @mood
  end

  def song_title
    @song_title = Recommendation.find(id).song.title
    song_title = @song_title
  end

  def background_story
    @background_story = Recommendation.find(id).song.background_story
    background_story = @background_story
  end

  def playback_url
    @playback_url = Recommendation.find(id).song.playback_url
    playback_url = @playback_url
  end

  def artist_name
    @artist_name = Recommendation.find(id).artist.name
    artist_name = @artist_name
  end

  def profile_url
    @profile_url = Recommendation.find(id).artist.profile_url
    profile_url = @profile_url
  end

  def positive_feedback
    @positive_feedback = contribute + like + favorite
    positive_feedback = @positive_feedback
  end

  def artist_content
    @artist_content = Recommendation.find(id).artist_comment.artist_content
    artist_content = @artist_content
  end
end
