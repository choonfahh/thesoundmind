class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.references :moment, foreign_key: true
      t.references :song, foreign_key: true
    end
  end
end
