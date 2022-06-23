class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday
  
end
