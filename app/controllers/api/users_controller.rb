module API
  class UsersController < ApplicationController

    def create
      # if fb_id exists in the database, 'GET' user_id
      # if not, add new row into database
      if User.exists?(fb_id: params["data"]["attributes"]["fb-id"])
        puts "This user already exist."

      else
        user = User.new do |u|
          u.fb_id = params["data"]["attributes"]["fb-id"]
          u.name = params["data"]["attributes"]["name"]
          u.email = params["data"]["attributes"]["email"]
          u.save
        end
      end
    end
  end
end
