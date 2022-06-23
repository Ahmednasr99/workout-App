class DietSerializer < ActiveModel::Serializer
  attributes :id, :meal_1, :meal_2, :meal_3, :meal_4, :meal_5, :meal_6, :meals
  def meals
    ActiveModel::SerializableResource.new(object.meals,  each_serializer: MealSerializer)
  end
end
