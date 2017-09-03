class Recommendation < ApplicationRecord
  has_many :comments

  belongs_to :moment
  belongs_to :song
  has_one :artist, through: :song

  validates :moment_id, :song_id, :number_of_recommender,
            :impression, :skip, :info_seen, :unlock, :like, :favorite,
            presence: true

  include RecommendationAccessor
end
