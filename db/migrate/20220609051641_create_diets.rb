class CreateDiets < ActiveRecord::Migration[7.0]
  def change
    create_table :diets do |t|
      t.string :meal_1
      t.string :meal_2
      t.string :meal_3
      t.string :meal_4
      t.string :meal_5
      t.string :meal_6
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
