class Api::LeasesController < ApplicationController

    # skip_before_action :authorize, only: [:show, :update, :destroy, :index]

    def index
        render json: Lease.all
    end

end
