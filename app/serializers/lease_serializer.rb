class LeaseSerializer < ActiveModel::Serializer
  attributes :id, :price, :contract_info, :audio_file, :instrumental, :contract
  has_one :audio_file
  has_one :instrumental, through: :audio_file

  def contract
    Rails.application.routes.default_url_options[:host] = 'https://jonnynice.onrender.com'
    Rails.application.routes.url_helpers.rails_blob_path(object.contract, only_path: true) if object.contract.attached?
  end

end
