class CreateWaves < ActiveRecord::Migration[5.2]
  def change
    create_table :waves do |t|
      t.string :name
      t.float :x
      t.float :y
      t.float :z
      t.text :func

      t.timestamps
    end
  end
end
