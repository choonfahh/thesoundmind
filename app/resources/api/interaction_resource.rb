module API
  class InteractionResource < JSONAPI::Resource
    attributes :recommender_and_like,
               :number_of_recommender, :impression, :skip, :info_seen, :unlock,
               :like, :favorite

    belongs_to :recommendation
  end
end
