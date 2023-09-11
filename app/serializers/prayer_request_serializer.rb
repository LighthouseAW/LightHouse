class PrayerRequestSerializer < ActiveModel::Serializer
  attributes :id, :name, :request, :email
end
