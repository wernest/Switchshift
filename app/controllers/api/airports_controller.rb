module Api
  class AirportsController < ApplicationController
    before_action :authenticate_user!

    def query
      render json: Airport.where('iata like ?', '%' + safe_params[:query] + '%')
    end

    private
    def safe_params
      params.permit(:query)
    end
  end
end