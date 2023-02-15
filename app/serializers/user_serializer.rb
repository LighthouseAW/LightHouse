class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :cart_id, :purchased
  has_many :carts
  has_many :purchases, serializer: PurchaseSerializer

  def cart_id
    last_cart = object.carts.last
    last_cart.id if last_cart.present?
  end

  def purchased
    Rails.application.routes.default_url_options[:host] = 'https://jonnynice.onrender.com'
    result = []
    object.purchases.each do |purchase|
      purchase.orders.each do |order|
        if order.lease.audio_file.file.attached?
          result << {
            
            instrumental: order.lease.instrumental.title,
            contract_info: order.lease.contract_info,
            file: Rails.application.routes.url_helpers.rails_blob_path(order.lease.audio_file.file, only_path: true)
            contract:  Rails.application.routes.url_helpers.rails_blob_path(order.lease.contract, only_path: true)
          }
        end
      end
    end
    result
  end

end
