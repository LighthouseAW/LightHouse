class AddLinksToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :facebook, :string
    add_column :projects, :app, :string
  end
end
