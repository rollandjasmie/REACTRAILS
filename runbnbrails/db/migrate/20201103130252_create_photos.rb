class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.json :photo
      t.string :legend
      t.references :logement, null: false, foreign_key: true

      t.timestamps
    end
  end
end
