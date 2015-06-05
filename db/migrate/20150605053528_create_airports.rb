class CreateAirports < ActiveRecord::Migration
  def change
    create_table :airports do |t|
      t.string :iata, index: true
      t.string :icao
      t.string :name, index: true
      t.string :location_served
      t.string :timezone

      t.timestamps
    end
  end

  create_table :shift_waypoints  do |t|
    t.belongs_to :shift, index: true
    t.belongs_to :airport, index: true

    t.integer :stop_number
  end
end
