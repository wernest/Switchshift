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
shift = Shift.create! :title => "Will's Shift", :user_id => user.id, :origin => "SAN", :destination => "JFK", :group_id => group.id
shift2 = Shift.create! :title => "Will's Shift", :user_id => user2.id, :origin => "SAN", :destination => "JFK", :group_id => group2.id
shift.save!
shift2.save!