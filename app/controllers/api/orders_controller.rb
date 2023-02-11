class Api::OrdersController < ApplicationController
    before_action :find_order, only: [:show, :update, :destroy]

    skip_before_action :authorize, only: [:create, :show, :update, :destroy, :index]

    def index
        render json: Order.all
    end

    def show
        render json: @order
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    def update
        @order.update!(order_params)
        render json: @order, status: :accepted
    end

    def destroy
        @order.destroy
        head :no_content
    end

    def purchase
        cart = User.find(session[:user_id]).carts.last

        purchase = Purchase.create!(user_id: session[:user_id])

        cart.orders.each do |order|
            order.update!(purchase_id: purchase.id)
        end

        cart.orders.clear

        render json: purchase, status: :created
    end

    private

    def find_order
        @order = Order.find(params[:id])
    end

    def order_params
        params.permit(:lease_id, :cart_id, :purchase_id)
    end
end
