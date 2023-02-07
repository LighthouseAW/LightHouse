class InstrumentalSerializer < ActiveModel::Serializer
  attributes :id, :title, :picture, :info, :genre
  has_many :audio_files, serializer: AudioFileSerializer
end
