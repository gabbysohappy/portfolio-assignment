class Api::GabblogsController < ApplicationController
    def index
        render json: Gabblog.all
    end

    def create
        @gabblog = Gabblog.new(gabblog_params)
        if @gabblog.save
            render json: @gabblog
        else
            render json: { errors: @gabblog.errors }, status: :unprocessable_entity
        end
    end

    def update
        @gabblog = Gabblog.find(params[:id])
        if @gabblog.update(gabblog_params)
            render json: @gabblog
        else
            render json: { errors: @gabblog.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        Gabblog.find(params[:id]).destroy
        render json: { message: 'Blog entry deleted'}
    end

    private 
        def gabblog_params
            params.require(:gabblog).permit(:title, :body, :tags)
        end
end
