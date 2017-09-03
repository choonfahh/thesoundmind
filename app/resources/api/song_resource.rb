module API
  class SongResource < JSONAPI::Resource
    attributes :title, :background_story, :playback_url

    belongs_to :artist
    has_many :recommendations
    has_many :moments, through: :recommendations
  end
end
