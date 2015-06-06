class AddLatToAirports < ActiveRecord::Migration
  def change
    add_column :airports, :lat, :decimal, {:precision => 10, :scale=>6}
    add_column :airports, :long, :decimal, {:precision => 10, :scale=>6}
    add_column :airports, :country, :string
  end
end
