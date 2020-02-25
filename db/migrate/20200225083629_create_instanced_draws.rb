class CreateInstancedDraws < ActiveRecord::Migration[5.2]
  def change
    create_table :instanced_draws do |t|

      t.timestamps
    end
  end
end
