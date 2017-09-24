module API
  class InteractionsController < ApplicationController

    def index
      # retrieve favorites filtered under user_id
    end

    def create
      # add song rows after 10 songs are finished
      interaction = Interaction.new do |i|
        i.recommendation_id = params["data"]["attributes"]["recommendation-id"]
        i.user_id = User.where(fb_id: params["data"]["attributes"]["user-id"]).ids[0]
        i.contribute = params["data"]["attributes"]["contribute"]
        i.impression = params["data"]["attributes"]["impression"]
        i.skip = params["data"]["attributes"]["skip"]
        i.info_seen = params["data"]["attributes"]["info-seen"]
        i.unlock = params["data"]["attributes"]["unlock"]
        i.like = params["data"]["attributes"]["like"]
        i.favorite = params["data"]["attributes"]["favorite"]
        i.save
      end

      @recommendation = Recommendation.where(id: params["data"]["attributes"]["recommendation-id"])[0]
      @recommendation.contribute += params["data"]["attributes"]["contribute"]
      @recommendation.impression += params["data"]["attributes"]["impression"]
      @recommendation.skip += params["data"]["attributes"]["skip"]
      @recommendation.info_seen += params["data"]["attributes"]["info-seen"]
      @recommendation.unlock += params["data"]["attributes"]["unlock"]
      @recommendation.like += params["data"]["attributes"]["like"]
      @recommendation.favorite += params["data"]["attributes"]["favorite"]
      @recommendation.save
    end

  end
end
