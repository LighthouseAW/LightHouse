class ProjectPhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo_url, :photo_token

  def photo_url
    Rails.application.routes.url_helpers.rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end

  def photo_token
    object.photo.token if object.photo.attached?
  end
end
