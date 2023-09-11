class BlogPhoto < ApplicationRecord
  belongs_to :blogpost
  has_one_attached :file
end
