class AddTextToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :module1, :text
    add_column :projects, :module2, :text
    add_column :projects, :module3, :text
  end
end
