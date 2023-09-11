class AddVideoToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :video, :string
  end
end
