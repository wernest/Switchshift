class Airport < ActiveRecord::Base
  has_many :shift_waypoints
end
