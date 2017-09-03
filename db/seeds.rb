require 'csv'

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
  t.artist_comment = row['artist_comment']
  t.number_of_recommender = row['number_of_recommender']
  t.impression = row['impression']
  t.skip = row['skip']
  t.info_seen = row['info_seen']
  t.unlock = row['unlock']
  t.like = row['like']
  t.favorite = row['favorite']
  t.save
end

comment_csv = File.read(Rails.root.join('lib', 'seeds', 'comments.csv'))
comment_seed = CSV.parse(comment_csv, :headers => true, :encoding => 'ISO-8859-1')
comment_seed.each do |row|
  t = Comment.new
  t.recommendation_id = row['recommendation_id']
  t.user = row['user']
  t.content = row['content']
  t.impression = row['impression']
  t.skip = row['skip']
  t.info_seen = row['info_seen']
  t.unlock = row['unlock']
  t.like = row['like']
  t.favorite = row['favorite']
  t.save
end
