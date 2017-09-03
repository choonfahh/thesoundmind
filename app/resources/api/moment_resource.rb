module API
  class MomentResource < JSONAPI::Resource
    attributes :location, :activity, :mood

    has_many :recommendations
    has_many :songs, through: :recommendations
  end
end
