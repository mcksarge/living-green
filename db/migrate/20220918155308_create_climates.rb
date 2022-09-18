class CreateClimates < ActiveRecord::Migration[7.0]
  def change
    create_table :climates do |t|
      t.string :name

      t.timestamps
    end
  end
end
