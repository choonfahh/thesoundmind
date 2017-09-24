module RecommendationAccessor
  attr_accessor :location, :activity, :mood,
                :song_title, :background_story, :playback_url,
                :artist_name, :profile_url, :positive_feedback,
                :contribute, :impression, :skip, :info_seen, :unlock,
                :like, :favorite

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

  def contribute
    @contribute = Recommendation.find(id).interactions.sum(:contribute)
    contribute = @contribute
  end

  def impression
    @impression = Recommendation.find(id).interactions.sum(:impression)
    impression = @impression
  end

  def skip
    @skip = Recommendation.find(id).interactions.sum(:skip)
    skip = @skip
  end

  def info_seen
    @info_seen = Recommendation.find(id).interactions.sum(:info_seen)
    info_seen = @info_seen
  end

  def unlock
    @unlock = Recommendation.find(id).interactions.sum(:unlock)
    unlock = @unlock
  end

  def like
    @like = Recommendation.find(id).interactions.sum(:like)
    like = @like
  end

  def favorite
    @favorite = Recommendation.find(id).interactions.sum(:favorite)
    favorite = @favorite
  end
end
