class PlantsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize

    def index
        plants = Plant.order(name: :asc)
        render json: plants, include: [:climate, :users, :user_plants]
    end

    def show
        plant = Plant.find_by(id: params[:id])
        render json: plant, include: [:climate, :users, :user_plants]
    end

    def create
        plant = Plant.create(plant_params)
        render json: plant, include: [:climate], status: :created
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
