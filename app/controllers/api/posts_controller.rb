class Api::PostsController < ApplicationController
class Api::CommentsController < ApplicationController
    before_action :set_blog

    def index
        render json: @blog.posts
    end

    def create
        @post = @blog.posts.new(posts_params)
        if @post.save
            render json: @post

        else
            render json: { errors: @post.errors }, status: :unprocessable_entity
        end
    end

    def update
        @post = @blog.posts.find(params[:id])
        if @post.update(posts_params)
            render json: @post
        else
            render json: { errors: @post.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @blog.posts.find(params[:id]).destroy
        render json: { message: 'Post Destroyed'}
    end

    private
        def posts_params
            params.require(:post).permit(:author, :body)
        end

        def set_blog
            @blog = GabBlog.find(params[:blog_id])
        end
end