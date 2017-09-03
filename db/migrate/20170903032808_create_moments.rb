class CreateMoments < ActiveRecord::Migration[5.1]
  def change
    create_table :moments do |t|
      t.string :location
      t.string :activity
      t.string :mood
    end
  end
end
