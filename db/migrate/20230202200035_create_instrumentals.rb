class CreateInstrumentals < ActiveRecord::Migration[7.0]
  def change
    create_table :instrumentals do |t|
      t.string :title
      t.string :picture
      t.string :info
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
