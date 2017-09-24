module API
  class UserResource < JSONAPI::Resource
    attributes :fb_id, :name, :email
  end
end
