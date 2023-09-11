class CreateProjectPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :project_photos do |t|
      t.string :title
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
