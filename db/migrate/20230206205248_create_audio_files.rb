class CreateAudioFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :audio_files do |t|
      t.belongs_to :instrumental, null: false, foreign_key: true
      t.belongs_to :lease, null: false, foreign_key: true

      t.timestamps
    end
  end
end
