module Api
class ShiftsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Shift.all
  end

  def create
    shift = Shift.new(safe_shift_params)
    shift.user = current_user

    shift.save
    render json: shift
  end

  # Gets all the Shifts that belong to "me" aka the current user
  def me
    render json: Shift.where(:user_id => current_user)
  end


  def update
    shift = Shift.find(safe_id_param[:id])
    if shift.user == current_user then
      shift.update(safe_shift_params)
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
    end  end


  private
  def safe_shift_params
    params.permit(:title, :origin, :destination, :price)
  end

  def safe_id_param
    params.permit(:id)
  end
end

end
