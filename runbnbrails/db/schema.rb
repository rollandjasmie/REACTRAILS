# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_29_133711) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adresses", force: :cascade do |t|
    t.string "pays"
    t.string "ville"
    t.string "adresse"
    t.string "code"
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_adresses_on_logement_id"
  end

  create_table "autres", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "calendriers", force: :cascade do |t|
    t.datetime "startDate"
    t.datetime "endDate"
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_calendriers_on_logement_id"
  end

  create_table "chambres", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "conditions", force: :cascade do |t|
    t.string "conditions"
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_conditions_on_logement_id"
  end

  create_table "equipements", force: :cascade do |t|
    t.string "title", default: [], array: true
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_equipements_on_logement_id"
  end

  create_table "logements", force: :cascade do |t|
    t.string "name"
    t.string "categorie"
    t.string "types"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_logements_on_user_id"
  end

  create_table "maps", force: :cascade do |t|
    t.float "latitude"
    t.float "longitude"
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_maps_on_logement_id"
  end

  create_table "regles", force: :cascade do |t|
    t.string "regle", default: [], array: true
    t.string "arrive1"
    t.string "arrive2"
    t.string "depart1"
    t.string "depart2"
    t.bigint "logement_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["logement_id"], name: "index_regles_on_logement_id"
  end

  create_table "salons", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.string "first_name"
    t.string "adresse"
    t.string "mobile"
    t.string "date_of_birth"
    t.string "sexe"
    t.string "urgence"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
