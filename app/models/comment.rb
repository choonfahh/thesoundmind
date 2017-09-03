class Comment < ApplicationRecord
  belongs_to :recommendation

  validates :recommendation_id, :user, :content,
            :impression, :skip, :info_seen, :unlock, :like, :favorite,
            presence: true
end
