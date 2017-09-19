class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fb_id
      t.string :name
      t.string :email
      t.integer :unlock_points

      t.timestamps
    end
  end
end
