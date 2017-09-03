class Song < ApplicationRecord
  has_many :recommendations
  has_many :moments, through: :recommendations

  belongs_to :artist

  validates :title, :artist_id, :playback_url, presence: true
end
