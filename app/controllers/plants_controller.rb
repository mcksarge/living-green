class PlantsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        plants = Plant.order(name: :asc)
        render json: plants, include: :climate
    end

    def show
        plant = Plant.find_by(id: params[:id])
        render json: plant, include: :climate
    end

    def create
        plant = Plant.create(plant_params)
        render json: plant, status: :created
    end

    def destroy
        plant = Plant.find_by(id: params[:id])
        plant.destroy
        render json: plant
    end

    private

    def plant_params
        params.permit(:name, :soil, :image, :light, :water, :climate_id, :summary) 
    end

end
