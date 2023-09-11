class CreatePrayerRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :prayer_requests do |t|
      t.string :name
      t.text :request
      t.string :email

      t.timestamps
    end
  end
end
