class AddTokenToProjectPhotos < ActiveRecord::Migration[7.0]
  def change
    add_column :project_photos, :token, :string
  end
end
