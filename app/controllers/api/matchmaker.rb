module API
  module Matchmaker
    attr_accessor :list_three,
                  :list_two,
                  :list_one

    def preference_filter
      # retain those that fulfills all 3 moment criteria
      @list_three = Recommendation.includes(:moment).where(moments: { location: "Cafe",
                                                                      activity: "Chores",
                                                                      mood: "Stressed" })

      # retain those that fulfills 2 moment criteria
      @list_two = Recommendation.includes(:moment).where(moments: { location: "Cafe",
                                                                    activity: "Chores"}).or(
                  Recommendation.includes(:moment).where(moments: { location: "Cafe",
                                                                    mood: "Stressed"})).or(
                  Recommendation.includes(:moment).where(moments: { activity: "Chores",
                                                                    mood: "Stressed"}))
      @list_two = @list_two - @list_three

      # retain those that fulfills 1 moment criteria
      @list_one = Recommendation.includes(:moment).where(moments: { location: "Cafe" }).or(
                  Recommendation.includes(:moment).where(moments: { activity: "Chores" })).or(
                  Recommendation.includes(:moment).where(moments: { mood: "Stressed" }))
      @list_one = @list_one - @list_three - @list_two

      # filter out those that user skips (KIV)
    end

    # in order of importance - moment:desc, impression:asc, info_seen:desc,
    # recommender_and_like:desc, favorite:desc, unlock:desc, skip:asc
    def sorting_hat
      @list_three = @list_three.sort_by { |song|
                                          [song.impression,
                                           -song.info_seen,
                                           -song.recommender_and_like,
                                           -song.favorite,
                                           -song.unlock,
                                           song.skip] }

      @list_two = @list_two.sort_by { |song|
                                      [song.impression,
                                       -song.info_seen,
                                       -song.recommender_and_like,
                                       -song.favorite,
                                       -song.unlock,
                                       song.skip] }

      @list_one = @list_one.sort_by { |song|
                                      [song.impression,
                                       -song.info_seen,
                                       -song.recommender_and_like,
                                       -song.favorite,
                                       -song.unlock,
                                       song.skip] }
    end

    def recommendation_compile
      @recommendations = @list_three + @list_two + @list_one
    end
  end
end
