class Project < ApplicationRecord
    has_many :project_photos
    extend FriendlyId
    friendly_id :name, use: :slugged
end
