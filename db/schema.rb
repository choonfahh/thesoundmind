# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170919024323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artist_comments", force: :cascade do |t|
    t.bigint "recommendation_id"
    t.string "artist_content"
    t.index ["recommendation_id"], name: "index_artist_comments_on_recommendation_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "profile_url"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "recommendation_id"
    t.bigint "user_id"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recommendation_id"], name: "index_comments_on_recommendation_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "interactions", force: :cascade do |t|
    t.bigint "recommendation_id"
    t.bigint "user_id"
    t.integer "contribute"
    t.integer "impression"
    t.integer "skip"
    t.integer "info_seen"
    t.integer "like"
    t.integer "favorite"
    t.integer "unlock"
    t.integer "ad_willingness"
    t.integer "faulty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recommendation_id"], name: "index_interactions_on_recommendation_id"
    t.index ["user_id"], name: "index_interactions_on_user_id"
  end

  create_table "moments", force: :cascade do |t|
    t.string "location"
    t.string "activity"
    t.string "mood"
  end

  create_table "recommendations", force: :cascade do |t|
    t.bigint "moment_id"
    t.bigint "song_id"
    t.integer "contribute"
    t.integer "impression"
    t.integer "skip"
    t.integer "info_seen"
    t.integer "like"
    t.integer "favorite"
    t.integer "unlock"
    t.integer "ad_willingness"
    t.integer "faulty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["moment_id"], name: "index_recommendations_on_moment_id"
    t.index ["song_id"], name: "index_recommendations_on_song_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "title"
    t.bigint "artist_id"
    t.string "background_story"
    t.string "playback_url"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fb_id"
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "artist_comments", "recommendations"
  add_foreign_key "comments", "recommendations"
  add_foreign_key "comments", "users"
  add_foreign_key "interactions", "recommendations"
  add_foreign_key "interactions", "users"
  add_foreign_key "recommendations", "moments"
  add_foreign_key "recommendations", "songs"
  add_foreign_key "songs", "artists"
end
