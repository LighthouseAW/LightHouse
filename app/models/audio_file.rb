class AudioFile < ApplicationRecord
  has_one_attached :file
  belongs_to :instrumental
  belongs_to :lease
end
