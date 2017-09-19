class CreateArtistComments < ActiveRecord::Migration[5.1]
  def change
    create_table :artist_comments do |t|
      t.references :recommendation, foreign_key: true
      t.string :artist_comment
    end
  end
end
