module Matchmaker
  private

  attr_accessor :list_three,
                :list_two,
                :list_one

  def query_params
    params.permit([:location,
                   :activity,
                   :mood])
  end

  def preference_filter
    # retain those that fulfills all 3 moment criteria
    @list_three = Recommendation.includes(:moment).where(moments: { location: query_params[:location],
                                                                    activity: query_params[:activity],
                                                                    mood: query_params[:mood] })

    # retain those that fulfills 2 moment criteria
    @list_two = Recommendation.includes(:moment).where(moments: { location: query_params[:location],
                                                                  activity: query_params[:activity]}).or(
                Recommendation.includes(:moment).where(moments: { location: query_params[:location],
                                                                  mood: query_params[:mood]})).or(
                Recommendation.includes(:moment).where(moments: { activity: query_params[:activity],
                                                                  mood: query_params[:mood]}))
    @list_two = @list_two - @list_three

    # retain those that fulfills 1 moment criteria
    @list_one = Recommendation.includes(:moment).where(moments: { location: query_params[:location] }).or(
                Recommendation.includes(:moment).where(moments: { activity: query_params[:activity] })).or(
                Recommendation.includes(:moment).where(moments: { mood: query_params[:mood] }))
    @list_one = @list_one - @list_three - @list_two

    # filter out those that user skips (KIV)
  end

  # in order of importance - moment:desc, impression:asc, info_seen:desc,
  # contribute_and_like:desc, favorite:desc, unlock:desc, skip:asc
  def sorting_hat
    @list_three = @list_three.sort_by { |song|
                                        [song.impression,
                                         -song.info_seen,
                                         -song.positive_feedback,
                                         song.skip] }

    @list_two = @list_two.sort_by { |song|
                                    [song.impression,
                                     -song.info_seen,
                                     -song.positive_feedback,
                                     song.skip] }

    @list_one = @list_one.sort_by { |song|
                                    [song.impression,
                                     -song.info_seen,
                                     -song.positive_feedback,
                                     song.skip] }
  end

  def recommendation_compile
    @recommendations = @list_three + @list_two + @list_one
  end
end
