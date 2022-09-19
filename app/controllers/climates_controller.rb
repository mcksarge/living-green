class ClimatesController < ApplicationController

    def index #List all climates
        climates = Climate.all
        render json: climates
    end

end
