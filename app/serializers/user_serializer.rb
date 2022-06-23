class UserSerializer < ActiveModel::Serializer
  attributes  :id, :name, :email, :admin, :diets, :workouts

  def diets
    ActiveModel::SerializableResource.new(object.diets,  each_serializer: DietSerializer)
  end
  def workouts
    ActiveModel::SerializableResource.new(object.workouts,  each_serializer: WorkoutSerializer)
  end
  
  
end
