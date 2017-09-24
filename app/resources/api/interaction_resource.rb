module API
  class InteractionResource < JSONAPI::Resource
    attributes :recommendation_id, :user_id, :contribute, :impression, :skip, :info_seen, :unlock,
               :like, :favorite
  end
end
