class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize, only: [:create, :show, :update]

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
        current_user = User.find_by(id: session[:user_id])
        if !current_user
            current_user = User.find_by(id: params[:user_id])
        end
        
        if current_user
          render json: current_user, include: :plants
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: params[:id])
        new_username = params[:username]
        new_password = params[:password]
        new_name = params[:name]
        if ((user) && (new_password == nil))
            user.update(
                name: new_name,
                username: new_username,
            )
            render json: user
        elsif (user)
            user.update(
                name: new_name,
                username: new_username,
                password: new_password
            )
            render json: user
        else
            render json: {errors: ["User not found"]}, status: :unprocessable_entity
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
