module Api
class ShiftsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Shift.all
  end

  def create
    shift = Shift.new(safe_shift_params)
    shift.user = current_user

    shift.save!
    render json: shift
  end

  # Gets all the Shifts that belong to "me" aka the current user
  #
  # -- Doesn't return userID to client. Also adds the first name of the person who
  #    created the shift
  def me
    render json: Shift.where(:user_id => current_user)
  end


  def update
    shift = Shift.find(safe_id_param[:id])
    if shift.user == current_user then
      shift_params = safe_shift_params
      add_stop_number_to_waypoints(shift_params[:shift_waypoints_attributes])
      shift.update(shift_params)
      render json: shift, :status => 200
    else
      render :nothing => true, :status => 403
    end
  end

  def destroy
    shift = Shift.find(safe_id_param[:id])
    if shift.user == current_user then
      shift.delete
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 403
    end
  end


  private
  def safe_shift_params
    # TODO need to uncomment this once I fix it so that it will destroy the old ones -Rob
    #params.permit(:title, :origin, :destination, :price, shift_waypoints_attributes: [:airport_id])
    params.permit(:title, :origin, :destination, :price)
  end

  def safe_id_param
    params.permit(:id)
  end

  def add_stop_number_to_waypoints(waypoints)
    waypoints.each.with_index { |waypoint, i| waypoint[:stop_number] = i  } unless waypoints.nil?
  end
end

end
