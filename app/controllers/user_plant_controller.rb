class UserPlantController < ApplicationController

    def index
        userPlants = UserPlant.all
        render json: userPlants, include: [:plant]
    end

    def show
        userPlant = UserPlant.find_by(id: params[:id])
        render json: userPlant
    end

    def create
        userPlant = UserPlant.create(userPlant_params)
        render json: userPlant
    end

    def destroy
        userPlant = UserPlant.find_by(id: params[:id])
        userPlant.destroy
        render json: userPlant
    end

    private

    def userPlant_params
        params.permit(:user_id, :plant_id)
    end


end
