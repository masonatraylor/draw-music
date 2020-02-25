class CreateScenes < ActiveRecord::Migration[5.2]
  def change
    create_table :scenes do |t|
      t.string :name
      t.integer :wave_id
      t.integer :draw_id
      t.integer :audio_id

      t.timestamps
    end
  end
end
