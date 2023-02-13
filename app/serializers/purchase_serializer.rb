class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :orders
  belongs_to :user
  has_many :orders, serializer: OrderSerializer
end
