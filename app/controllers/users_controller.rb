class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorized, only: [:create, :show, :index]

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
        user = User.find_by(id: session[:user_id])
        render json: current_user
    end

    private

    def authorize
        render json: {errors: ["Not Authorized"]}, status: :unauthorized
    end

    def user_params
        params.permit(:username, :password, :name)
    end
end
