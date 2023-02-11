class Api::PurchasesController < ApplicationController

    skip_before_action :authorize, only: [:show, :update, :destroy, :index]

    def index
        render json: Purchase.all
    end

end
