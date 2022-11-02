class ClimatesController < ApplicationController
    skip_before_action :authorize

    def index #List all climates
        climates = Climate.all
        render json: climates
    end
    
    def create
        climate = Climate.find_or_create_by(name: climate_params.name)
        render json: climate, status: :created
    end

    def show
        climate = Climate.find_by(id: params[:id])
        render json: climate
    end

    private

    def climate_params
        params.permit(:name)
    end

end
