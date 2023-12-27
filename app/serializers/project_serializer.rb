class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :subtitle, :blurb, :mission_statement, :about, :website, :video, :facebook, :app, :slug
  has_many :project_photos
end
