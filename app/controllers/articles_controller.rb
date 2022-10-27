class ArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize

    def index
        articles = Article.all
        render json: articles, include: :user
    end

    def show
        article = Article.find_by(id: params[:id])
        render json: article, include: :user
    end

    def create
        article = Article.create(article_params)
        if article.valid?
            render json: article, status: :created
        else
            render json: {errors: ["Invalid Data", "Title must be unique", "Make sure to fill in both the Title and Body"]}, status: :unprocessable_entity
        end
    end

    def destroy
        article = Article.find_by(id: params[:id])
        article.destroy
        render json: article
    end

    def update
        article = Article.find_by(id: params[:id])
        if article
            article.update({
                title: params[:title],
                body: params[:body]
            })
            render json: article
        else
            render json: {errors: ["Article not found"]}, status: :unprocessable_entity
        end
    end

    private

    def article_params
        params.permit(:title, :body, :user_id)
    end

end
