class CreateBlogPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :blog_photos do |t|
      t.string :title
      t.belongs_to :blogpost, null: false, foreign_key: true

      t.timestamps
    end
  end
end
