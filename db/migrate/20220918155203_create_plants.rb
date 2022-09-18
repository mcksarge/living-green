class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :soil
      t.string :image
      t.string :light
      t.string :water
      t.integer :climate_id
      t.string :summary

      t.timestamps
    end
  end
end
