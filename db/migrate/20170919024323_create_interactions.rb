class CreateInteractions < ActiveRecord::Migration[5.1]
  def change
    create_table :interactions do |t|
      t.references :recommendation, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :contribute
      t.integer :impression
      t.integer :skip
      t.integer :info_seen
      t.integer :like

      t.timestamps
    end
  end
end
