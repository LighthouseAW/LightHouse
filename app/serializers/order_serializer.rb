class OrderSerializer < ActiveModel::Serializer
  attributes :id, :cart, :lease
  belongs_to :cart
  belongs_to :lease, serializer: LeaseSerializer
end
