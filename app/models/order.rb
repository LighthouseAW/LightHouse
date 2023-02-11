class Order < ApplicationRecord
  belongs_to :cart, optional: true
  belongs_to :lease
  belongs_to :purchase, optional: true
end
