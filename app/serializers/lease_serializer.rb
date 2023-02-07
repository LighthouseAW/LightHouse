class LeaseSerializer < ActiveModel::Serializer
  attributes :id, :price, :contract_info, :audio_file, :instrumental
  has_one :audio_file
  has_one :instrumental, through: :audio_file
end
