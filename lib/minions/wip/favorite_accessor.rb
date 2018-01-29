module FavoriteAccessor
  attr_accessor :location, :activity, :mood,
                :song_title, :background_story, :playback_url,
                :artist_name, :profile_url, :positive_feedback,
                :artist_content

  def location
    @location = Interaction.find(id).recommendation.moment.location
    location = @location
  end

  def activity
    @activity = Interaction.find(id).recommendation.moment.activity
    activity = @activity
  end

  def mood
    @mood = Interaction.find(id).recommendation.moment.mood
    mood = @mood
  end

  def song_title
    @song_title = Interaction.find(id).recommendation.song.title
    song_title = @song_title
  end

  def background_story
    @background_story = Interaction.find(id).recommendation.song.background_story
    background_story = @background_story
  end

  def playback_url
    @playback_url = Interaction.find(id).recommendation.song.playback_url
    playback_url = @playback_url
  end

  def artist_name
    @artist_name = Interaction.find(id).recommendation.artist.name
    artist_name = @artist_name
  end

  def profile_url
    @profile_url = Interaction.find(id).recommendation.artist.profile_url
    profile_url = @profile_url
  end

  def artist_content
    @artist_content = Interaction.find(id).recommendation.artist_comment.artist_content
    artist_content = @artist_content
  end

  def positive_feedback
    @positive_feedback = Interaction.find(id).recommendation.contribute + Interaction.find(id).recommendation.like + Interaction.find(id).recommendation.favorite
    positive_feedback = @positive_feedback
  end

  def comments
    @comments = Interaction.find(id).recommendation.comments
    comments = @comments
  end
end
