module API
  class RecommendationResource < JSONAPI::Resource
    attributes :location, :activity, :mood,
               :song_title, :background_story, :playback_url,
               :artist_name, :profile_url,
               :contribute, :impression, :skip, :info_seen,
               :like, :artist_content, :comments

    def comments
      @model.comments.pluck_to_hash(:id, :content)
    end
  end
end
