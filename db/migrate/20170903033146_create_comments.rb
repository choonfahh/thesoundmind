class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.references :recommendation, foreign_key: true
      t.string :user
      t.string :content
      t.integer :impression
      t.integer :skip
      t.integer :info_seen
      t.integer :unlock
      t.integer :like
      t.integer :favorite

      t.timestamps
    end
  end
end
