module Api
  class AirportsController < ApplicationController
    before_action :authenticate_user!

    def query
      query_param = safe_params[:query] + '%'
      render json: Airport.where('iata like ? or name like ?', query_param, query_param).limit(10).order(:name)
    end

    private
    def safe_params
      params.permit(:query)
    end
  end
end