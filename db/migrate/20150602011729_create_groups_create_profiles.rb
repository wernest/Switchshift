class CreateGroupsCreateProfiles < ActiveRecord::Migration
  def change

    create_table :groups do |t|
        t.string :name
        t.text :description
        t.string :organization
        t.integer :created_by
    end

    create_table :profiles do |t|
       t.integer :user_id
       t.string :first_name
       t.string :last_name
       t.string :phone
       t.string :region
       t.string :airline
       t.string :home_origin
    end

    create_table :groups_users, id: false  do |t|
      t.belongs_to :group, :null => false
      t.belongs_to :user, :null => false
    end

    add_column :shifts, :origin_flight_number, :integer
    add_column :shifts, :group_id, :integer
    add_index :profiles, ["user_id"], name: "index_profile_on_user_id", unique: true
    add_index :shifts, :group_id
  end
end
