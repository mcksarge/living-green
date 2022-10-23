class ArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize

    def index
        articles = Article.all
        render json: articles
    end

    def show
        article = Article.find_by(id: params[:id])
        render json: article
    end

    def create
        article = Article.create(article_params)
        render json: article, status: :created
    end

    def destroy
        article = Article.find_by(id: params[:id])
        article.destroy
        render json: article
    end

    private

    def article_params
        params.permit(:title, :body, :user_id)
    end

end
