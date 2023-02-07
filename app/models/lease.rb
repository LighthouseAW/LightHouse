class Lease < ApplicationRecord
    has_one :audio_file
    has_one :instrumental, through: :audio_file
end
