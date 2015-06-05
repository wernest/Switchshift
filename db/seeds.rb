# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(:email => "willis127@gmail.com", :password => "password", :password_confirmation => "password")
user2 = User.create(:email => "rob.whiteside@gmail.com", :password => "password", :password_confirmation => "password")
user.skip_confirmation!
user2.skip_confirmation!
user.save!
user2.save!
group = Group.create! :name => "Will's Group", :created_by => user.id
group2 = Group.create! :name => "Rob's Group", :created_by => user2.id
group.save!
group2.save!

san = Airport.create(iata: 'SAN', icao:	'KSAN', name:	'San Diego International Airport', location_served:	'San Diego, California, United States')
las = Airport.create(iata: 'LAS', icao:	'KLAS', name:	'McCarren International Airport', location_served:	'Las Vegas, Nevada, United States')
lax = Airport.create(iata: 'LAX', icao:	'KLAX', name:	'Los Angeles International Airport', location_served:	'Los Angeles, California, United States')
jfk = Airport.create(iata: 'JFK', icao:	'KJFK', name:	'John F. Kennedy International Airport', location_served:	'New York City, New York, United States')
ord = Airport.create(iata: 'ORD', icao:	'KORD', name:	'O\'Hare International Airport', location_served:	'Chicago, Illinois, United States')
sfo = Airport.create(iata: 'SFO', icao:	'KSFO', name:	'San Francisco International Airport', location_served:	'San Francisco, California, United States')

shift1 = Shift.create(title: 'SW Quick Turnaround', user: user, group: group)
ShiftWaypoint.create(shift: shift1, airport: san, stop_number: 0)
ShiftWaypoint.create(shift: shift1, airport: las, stop_number: 1)
ShiftWaypoint.create(shift: shift1, airport: lax, stop_number: 2)
ShiftWaypoint.create(shift: shift1, airport: san, stop_number: 3)

shift2 = Shift.create(title: 'JFK and Back', user: user, group: group)
ShiftWaypoint.create(shift: shift2, airport: san, stop_number: 0)
ShiftWaypoint.create(shift: shift2, airport: jfk, stop_number: 1)
ShiftWaypoint.create(shift: shift2, airport: san, stop_number: 2)

shift3 = Shift.create(title: 'US Tour', user: user2, group: group2)
ShiftWaypoint.create(shift: shift3, airport: ord, stop_number: 0)
ShiftWaypoint.create(shift: shift3, airport: sfo, stop_number: 1)
ShiftWaypoint.create(shift: shift3, airport: jfk, stop_number: 2)
ShiftWaypoint.create(shift: shift3, airport: ord, stop_number: 3)