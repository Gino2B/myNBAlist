class CreateMoments < ActiveRecord::Migration[6.1]
  def change
    create_table :moments do |t|
      t.string :vid_link
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
