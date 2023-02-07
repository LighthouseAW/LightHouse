class Instrumental < ApplicationRecord
  belongs_to :genre
  has_many :audio_files
  has_many :leases, through: :audio_files
end
