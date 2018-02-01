class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.references :moment, foreign_key: true
      t.references :song, foreign_key: true
      t.integer :contribute
      t.integer :impression
      t.integer :skip
      t.integer :info_seen
      t.integer :like
      t.integer :favorite
      t.integer :unlock
      t.integer :ad_willingness

      t.timestamps
    end
  end
end
