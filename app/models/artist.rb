class Artist < ApplicationRecord
  has_many :songs
  has_many :recommendations, through: :songs

  validates :name, presence: true
end
