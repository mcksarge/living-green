class UserPlantController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize

    def index
        userPlants = UserPlant.all
        render json: userPlants, include: [:plant, :user]
    end

    def show
        userPlant = UserPlant.find_by(id: params[:id])
        render json: userPlant
    end

    def myplants
        user = User.find_by(id: params[:id])
        userPlants = user.user_plants
        render json: userPlants, include: :plant
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
