# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Builds users and groups if they don't exist, or gets them if they do.

created_users = []
users = ["willis127@gmail.com", "rob.whiteside@gmail.com"]
users.each do |user|
  if User.exists?(:email => user)
    new_user = User.where(:email => user).first
  else
    new_user = User.create(:email => user, :password => "password", :password_confirmation => "password")
    new_user.skip_confirmation!
    new_user.save!
  end
  created_users << new_user
end

created_groups = []
groups_to_create = ["Will's Group", "Rob's Group"]
groups_to_create.each_with_index  do |group, index|
  if Group.exists?(:name => group)
    current_group = Group.where(:name => group).first
  else
    current_group = Group.create! :name => group, :created_by => created_users[index].id
    current_group.save!
  end
  created_groups << current_group
end

#   This file contains a list of all airports in the world
#   and has information on IATA, ICAP, City, Country, Lat, Long about them
#   If the database has already been populated, this will be skipped.
#   this will take a while (5 minutes) as there are over 9000 entries.

unless Airport.where(:iata => 'SAN').any?
  open(File.join(Rails.root, 'db', 'airports.dat')).each_line do |line|
    airport = line.delete!('""').split(',')
    unless airport[4].nil? && airport[5].nil? && airport[1].nil? && airport[2].nil? && airport[3].nil?
      Airport.create(:iata => airport[4],
                     :icao => airport[5],
                     :name => airport[1],
                     :location_served => airport[2],
                     :country => airport[3],
                     :lat => airport[6],
                     :long => airport[7],
                     :timezone => airport[9])
    end
  end
end

#   The format for adding more shifts is
#   Array[0] = title
#   Array[1] = Array of Routes by IATA
#
#   This will create shifts if they don't already exist by name.

shifts = [
    ["SW Quick Turnaround", ["SAN", "LAX", "LAX", "SAN"], created_users[0], created_groups[0]],
    ["JFK and Back", ["SAN", "JFK", "SAN"], created_users[0], created_groups[0]] ,
    ["US Tour", ["ORD", "SFO", "JFK", "ORD"], created_users[1], created_groups[1]]
]
shifts.each do |shift|
  unless Shift.exists?(:title => shift[0])
    shift1 = Shift.create(title: shift[0], user: shift[2], group: shift[3])
    shift[1].each_with_index do |route, index|
      ShiftWaypoint.create(shift: shift1, airport: Airport.where(:iata => route).first, stop_number: index)
    end
  end
end