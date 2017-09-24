class Recommendation < ApplicationRecord
  has_many :comments
  has_one :artist_comment
  has_many :interactions

  belongs_to :moment
  belongs_to :song
  has_one :artist, through: :song

  validates :moment_id, :song_id,
            presence: true

  include RecommendationAccessor
end
