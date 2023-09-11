class BlogpostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :subtitle, :blurb
end
