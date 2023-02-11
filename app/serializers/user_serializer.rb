class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cart_id
  has_many :carts
  has_many :purchases

  def cart_id
    last_cart = object.carts.last
    last_cart.id if last_cart.present?
  end
end
