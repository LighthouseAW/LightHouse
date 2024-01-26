class ProjectPhoto < ApplicationRecord
  belongs_to :project
  has_one_attached :photo
  before_create :generate_token

  def generate_token
    self.token = SecureRandom.urlsafe_base64
  end
end
