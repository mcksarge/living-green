class ApplicationController < ActionController::Base
    include ActionController::Cookies
    before_action :authorized

    def authorized
        @user = User.find_by(id: session[:user_id])
        render json: {error: "Not Authorized"}, status: :unauthorized unless @user
    end

end
