class CreateJoinTableUsersFavPlayers < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :players do |t|
      t.index [:user_id, :player_id]
      t.index [:player_id, :user_id]
    end
  end
end
