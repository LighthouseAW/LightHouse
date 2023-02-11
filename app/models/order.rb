class Order < ApplicationRecord
  belongs_to :cart
  belongs_to :lease
  belongs_to :purchase, optional: true
end
