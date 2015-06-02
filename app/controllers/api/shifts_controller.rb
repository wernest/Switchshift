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
  end


  private
  def safe_shift_params
    params.permit(:title, :origin, :destination)
  end

  def safe_id_param
    params.permit(:id)
  end
end

end
