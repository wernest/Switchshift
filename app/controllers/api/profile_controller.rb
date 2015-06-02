module Api
  class ProfileController < ApplicationController
    before_action :authenticate_user!

    def index
      profile = Profile.where(user_id: current_user.id )
      if profile.empty?
        profile = Profile.new(:user_id => current_user.id)
        render json: profile
      else
        render json: profile
      end
    end

    def create
      render :nothing => true, :status => 200
    end

    def update
      profile = Profile.find(safe_id_param)
      if profile.user_id == current_user.id then
        profile.update(safe_profile_params)
        render json: profile
      else
        render :nothing => true, :status => 403
      end
    end

    def destroy

    end

    private
    def safe_profile_params
      params.permit(:first_name, :last_name, :phone, :region, :airline, :home_origin,:email)
    end

    def safe_id_param
      params.permit(:id)
    end
  end
end
