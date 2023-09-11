class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :subtitle, :blurb, :mission_statement, :about, :website, :video
  has_many :project_photos
end
