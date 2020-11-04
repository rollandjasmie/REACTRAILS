class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :photo
  has_one :logement
end
