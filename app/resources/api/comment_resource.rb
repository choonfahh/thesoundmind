module API
  class CommentResource < JSONAPI::Resource
    attributes :user, :content

    belongs_to :recommendation
  end
end
