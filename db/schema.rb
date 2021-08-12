# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_12_191557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "moments", force: :cascade do |t|
    t.string "vid_link"
    t.bigint "player_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_moments_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "bio"
    t.string "team"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
  end

  create_table "players_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "player_id", null: false
    t.index ["player_id", "user_id"], name: "index_players_users_on_player_id_and_user_id"
    t.index ["user_id", "player_id"], name: "index_players_users_on_user_id_and_player_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
  end

  add_foreign_key "moments", "players"
end
