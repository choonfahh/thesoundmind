module API
  class UserResource < JSONAPI::Resource
    attributes :fb_id, :name, :email

    has_many :comments
    has_many :feedbacks
  end
end
