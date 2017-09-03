class Moment < ApplicationRecord
  has_many :recommendations
  has_many :songs, through: :recommendations

  validates :location, :activity, :mood, presence: true
end
