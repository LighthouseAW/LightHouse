class ProjectPhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo_url
  has_one :project

  def photo_url
    Rails.application.routes.default_url_options[:host] = 'https://localhost:3000'
    Rails.application.routes.url_helpers.rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end
end
