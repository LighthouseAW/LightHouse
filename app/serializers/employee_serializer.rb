class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :role, :blurb
end
