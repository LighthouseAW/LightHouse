class OrderSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :cart
  belongs_to :lease, serializer: LeaseSerializer
end
