class PlantsController < ApplicationController
    skip_before_action :verify_authenticity_token


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
        userID = params[:userID]
        userPlant = {"user_id": userID, "plant_id": plant.id}

        if userPlant
            userPlant = UserPlant.create(userPlant)
        end

        if plant.valid? 
            render json: plant, include: [:climate, :users], status: :created
        else
            render json: {errors: ["Invalid Data", "Name must be unique", "All fields are required"]}, status: :unprocessable_entity
        end
    end

    def destroy
        plant = Plant.find_by(id: params[:id])
        plant.destroy
        render json: plant
    end

    private

    def plant_params
        params.require(:plant).permit(:name, :soil, :image, :light, :water, :climate_id, :summary, user_plants_attributes: [:user_id]) 
    end

end
