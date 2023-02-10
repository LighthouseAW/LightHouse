class Api::UsersController < ApplicationController
    skip_before_action :guest, only: [:create, :show, :index, :update, :destroy]
    skip_before_action :authorize, only: [:create, :guest, :show, :index]
    before_action :find_user, only: [:update, :destroy]

    def index
        render json: User.all
    end

    def show
        if session[:user_id].nil?
            @guest = User.new(:email => "Guest")
            @guest.save(validate: false)
            session[:user_id] = @guest.id
            carts = @guest.carts.create!
        end
        authorize
        render json: @current_user
    end

    def guest
        return if session[:user_id]
        @guest = User.new(:email => "Guest")
        @guest.save(validate: false)
        session[:user_id] = @guest.id
        carts = @guest.carts.create!
    end

    def create

        user = User.create!(user_params)
        user.carts.create!
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end
end