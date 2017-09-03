module API
  class ArtistResource < JSONAPI::Resource
    attributes :name, :profile_url

    has_many :songs
    has_many :recommendations, through: :songs
  end
end
