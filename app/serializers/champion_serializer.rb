class ChampionSerializer < ActiveModel::Serializer
  attributes  :id, :name, :image_url, :birthDate, :weight, :height, :category, :nationality
end
