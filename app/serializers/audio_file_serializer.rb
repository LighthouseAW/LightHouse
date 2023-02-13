class AudioFileSerializer < ActiveModel::Serializer
    attributes :file, :lease
    belongs_to :instrumental
    belongs_to :lease

  def file
    Rails.application.routes.default_url_options[:host] = 'https://jonnynice.onrender.com'
    Rails.application.routes.url_helpers.rails_blob_path(object.file, only_path: true) if object.file.attached?
  end
end
