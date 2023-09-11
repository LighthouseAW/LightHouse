class BlogPhotoSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :blogpost
end
