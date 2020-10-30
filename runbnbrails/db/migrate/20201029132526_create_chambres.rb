class CreateChambres < ActiveRecord::Migration[6.0]
  def change
    create_table :chambres do |t|

      t.timestamps
    end
  end
end
