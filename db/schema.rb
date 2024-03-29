# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150606204702) do

  create_table "airports", force: true do |t|
    t.string   "iata"
    t.string   "icao"
    t.string   "name"
    t.string   "location_served"
    t.string   "timezone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "lat",             precision: 10, scale: 6
    t.decimal  "long",            precision: 10, scale: 6
    t.string   "country"
  end

  create_table "groups", force: true do |t|
    t.string  "name"
    t.text    "description"
    t.string  "organization"
    t.integer "created_by"
  end

  create_table "groups_users", id: false, force: true do |t|
    t.integer "group_id", null: false
    t.integer "user_id",  null: false
  end

  create_table "profiles", force: true do |t|
    t.integer "user_id"
    t.string  "first_name"
    t.string  "last_name"
    t.string  "phone"
    t.string  "region"
    t.string  "airline"
    t.string  "home_origin"
  end

  add_index "profiles", ["user_id"], name: "index_profile_on_user_id", unique: true

  create_table "shift_waypoints", force: true do |t|
    t.integer "shift_id"
    t.integer "airport_id"
    t.integer "stop_number"
  end

  add_index "shift_waypoints", ["airport_id"], name: "index_shift_waypoints_on_airport_id"
  add_index "shift_waypoints", ["shift_id"], name: "index_shift_waypoints_on_shift_id"

  create_table "shifts", force: true do |t|
    t.string   "title"
    t.integer  "user_id"
    t.date     "start"
    t.date     "end"
    t.string   "origin"
    t.string   "destination"
    t.decimal  "price"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "origin_flight_number"
    t.integer  "group_id"
  end

  add_index "shifts", ["group_id"], name: "index_shifts_on_group_id"
  add_index "shifts", ["user_id"], name: "index_shifts_on_user_id"

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
