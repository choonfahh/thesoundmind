module API
  class CommentResource < JSONAPI::Resource
    attributes :user_id, :content

    belongs_to :recommendation
  end
end
