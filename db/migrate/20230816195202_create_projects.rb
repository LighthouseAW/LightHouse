class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :subtitle
      t.text :blurb
      t.text :mission_statement
      t.text :about
      t.string :website

      t.timestamps
    end
  end
end
