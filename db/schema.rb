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

ActiveRecord::Schema.define(version: 2021_12_26_142845) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "completed_routines", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_completed_routines_on_user_id"
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "archived", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_exercises_on_user_id"
  end

  create_table "routine_exercises", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "duration"
    t.integer "tempo"
    t.bigint "completed_routine_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["completed_routine_id"], name: "index_routine_exercises_on_completed_routine_id"
  end

  create_table "routine_templates", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_routine_templates_on_user_id"
  end

  create_table "template_exercises", force: :cascade do |t|
    t.bigint "routine_template_id", null: false
    t.bigint "exercise_id", null: false
    t.integer "duration"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exercise_id"], name: "index_template_exercises_on_exercise_id"
    t.index ["routine_template_id"], name: "index_template_exercises_on_routine_template_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "completed_routines", "users"
  add_foreign_key "exercises", "users"
  add_foreign_key "routine_exercises", "completed_routines"
  add_foreign_key "routine_templates", "users"
  add_foreign_key "template_exercises", "exercises"
  add_foreign_key "template_exercises", "routine_templates"
end
