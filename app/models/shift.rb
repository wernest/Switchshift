class Shift < ActiveRecord::Base
  belongs_to :group
  belongs_to :user

  #Shift Waypoints is basically the join table to the Airport Definitions
  has_many :shift_waypoints
  has_many :airports, through: :shift_waypoints
  has_one :profile, through: :user

  def as_json(options)
    super(:include => [{:airports => { :only => [:iata, :icao]}}, {:profile => {:only => [:first_name]}}])
  end
end
