require 'csv'

user_csv = File.read(Rails.root.join('lib', 'seeds', 'users.csv'))
user_seed = CSV.parse(user_csv, :headers => true, :encoding => 'ISO-8859-1')
user_seed.each do |row|
  t = User.new
  t.fb_id = row['fb_id']
  t.name = row['name']
  t.email = row['email']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end

artist_csv = File.read(Rails.root.join('lib', 'seeds', 'artists.csv'))
artist_seed = CSV.parse(artist_csv, :headers => true, :encoding => 'ISO-8859-1')
artist_seed.each do |row|
  t = Artist.new
  t.name = row['name']
  t.profile_url = row['profile_url']
  t.save
end

moment_csv = File.read(Rails.root.join('lib', 'seeds', 'moments.csv'))
moment_seed = CSV.parse(moment_csv, :headers => true, :encoding => 'ISO-8859-1')
moment_seed.each do |row|
  t = Moment.new
  t.location = row['location']
  t.activity = row['activity']
  t.mood = row['mood']
  t.save
end

song_csv = File.read(Rails.root.join('lib', 'seeds', 'songs.csv'))
song_seed = CSV.parse(song_csv, :headers => true, :encoding => 'ISO-8859-1')
song_seed.each do |row|
  t = Song.new
  t.title = row['title']
  t.artist_id = row['artist_id']
  t.background_story = row['background_story']
  t.playback_url = row['playback_url']
  t.save
end

recommendation_csv = File.read(Rails.root.join('lib', 'seeds', 'recommendations.csv'))
recommendation_seed = CSV.parse(recommendation_csv, :headers => true, :encoding => 'ISO-8859-1')
recommendation_seed.each do |row|
  t = Recommendation.new
  t.moment_id = row['moment_id']
  t.song_id = row['song_id']
  t.contribute = row['contribute']
  t.impression = row['impression']
  t.skip = row['skip']
  t.info_seen = row['info_seen']
  t.like = row['like']
  t.favorite = row['favorite']
  t.unlock = row['unlock']
  t.ad_willingness = row['ad_willingness']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end

interaction_csv = File.read(Rails.root.join('lib', 'seeds', 'interactions.csv'))
interaction_seed = CSV.parse(interaction_csv, :headers => true, :encoding => 'ISO-8859-1')
interaction_seed.each do |row|
  t = Interaction.new
  t.recommendation_id = row['recommendation_id']
  t.user_id = row['user_id']
  t.contribute = row['contribute']
  t.impression = row['impression']
  t.skip = row['skip']
  t.info_seen = row['info_seen']
  t.like = row['like']
  t.favorite = row['favorite']
  t.unlock = row['unlock']
  t.ad_willingness = row['ad_willingness']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end

comment_csv = File.read(Rails.root.join('lib', 'seeds', 'comments.csv'))
comment_seed = CSV.parse(comment_csv, :headers => true, :encoding => 'ISO-8859-1')
comment_seed.each do |row|
  t = Comment.new
  t.recommendation_id = row['recommendation_id']
  t.user_id = row['user_id']
  t.content = row['content']
  t.save
end

artist_comment_csv = File.read(Rails.root.join('lib', 'seeds', 'artist_comments.csv'))
artist_comment_seed = CSV.parse(artist_comment_csv, :headers => true, :encoding => 'ISO-8859-1')
artist_comment_seed.each do |row|
  t = ArtistComment.new
  t.recommendation_id = row['recommendation_id']
  t.artist_content = row['artist_content']
  t.save
end
