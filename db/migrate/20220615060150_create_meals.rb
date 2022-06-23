class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :content
      t.belongs_to :diet, null: false, foreign_key: true
      t.boolean :ongoing

      t.timestamps
    end
  end
end
