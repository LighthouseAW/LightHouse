class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :role
      t.text :blurb

      t.timestamps
    end
  end
end
