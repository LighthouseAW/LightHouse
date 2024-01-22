class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :subtitle, :blurb, :mission_statement, :about, :module1, :module2, :module3, :website, :video, :facebook, :app, :slug
  has_many :project_photos
end
