class Lease < ApplicationRecord
    has_one_attached :contract
    has_one :audio_file
    has_one :instrumental, through: :audio_file
end
