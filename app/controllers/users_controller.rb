class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users
    end

    def show
        current_user = User.find(session[:user_id])
        if current_user
          render json: current_user, include: :plants
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def authorize
        render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end

    def user_params
        params.permit(:username, :password, :name)
    end
end
