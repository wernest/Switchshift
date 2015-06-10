class Shift < ActiveRecord::Base
  belongs_to :group
  belongs_to :user

  #Shift Waypoints is basically the join table to the Airport Definitions

  # Autosave tells activerecord to automatically save associations for shift_waypoints when this object is saved
  # Dependant destroy tells active record to remove shift_waypoints associations if this shift is deleted.

  has_many :shift_waypoints, autosave: true, dependent: :destroy
  has_many :airports, through: :shift_waypoints, :order => 'shift_waypoints.stop_number asc'
  has_one :profile, through: :user

  def as_json(options)
    super(:include => [{:airports => { :only => [:iata, :name]}}, {:profile => {:only => [:first_name]}}])
  end
end
