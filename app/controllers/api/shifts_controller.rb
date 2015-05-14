module Api
class ShiftsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Shift.all
  end

  def create
    shift = Shift.new(safe_shift_params)
    shift.user = current_user
    shift.save()
  end

  def destroy
  end


  private
  def safe_shift_params
    params.permit(:title, :origin, :destination)
  end

end

end
