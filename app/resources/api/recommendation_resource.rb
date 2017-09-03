module API
  class RecommendationResource < JSONAPI::Resource
    attributes :location, :activity, :mood, :moment_coefficient,
               :song_title, :artist_name, :playback_url, :profile_url,
               :background_story, :artist_comment,
               :recommender_and_like,
               :number_of_recommender, :impression, :skip, :info_seen, :unlock,
               :like, :favorite, :comments

    def comments
      @model.comments.pluck_to_hash(:user, :content)
    end
  end
end
