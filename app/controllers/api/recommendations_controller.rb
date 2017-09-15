module API
  class RecommendationsController < ApplicationController
    include Matchmaker

    def index
      preference_filter
      sorting_hat
      recommendation_compile
      jsonapi_render json: @recommendations.take(10)
    end

    #def update

    #end
    
  end
end
