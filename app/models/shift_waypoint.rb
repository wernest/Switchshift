class ShiftWaypoint < ActiveRecord::Base
  belongs_to :airport
  belongs_to :shift
end
