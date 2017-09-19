module API
  class ArtistCommentResource < JSONAPI::Resource
    attributes :artist_comment

    belongs_to :recommendation
  end
end
