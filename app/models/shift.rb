class Shift < ActiveRecord::Base
  belongs_to :group
  belongs_to :user

  #Shift Waypoints is basically the join table to the Airport Definitions

  # Autosave tells activerecord to automatically save associations for shift_waypoints when this object is saved
  # Dependant destroy tells active record to remove shift_waypoints associations if this shift is deleted.

  has_many :shift_waypoints, autosave: true, dependent: :destroy
  has_many :airports, through: :shift_waypoints, :order => 'shift_waypoints.stop_number asc'
  has_one :profile, through: :user

  # This tells the shift model to accept a list of shift_waypoint attributes instead
  # forcing us to build the waypoint object itself. This is especially useful when we
  # save a shift and want to include the nested waypoint objects.  allow_destroy tells
  # the model that it should delete waypoints that are marked for destroy
  accepts_nested_attributes_for :shift_waypoints, allow_destroy: true

  def as_json(options)
    super(:include => [{:airports => { :only => [:iata, :name, :id]}}, {:profile => {:only => [:first_name]}}])
  end
end
