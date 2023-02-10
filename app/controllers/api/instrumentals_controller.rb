class Api::InstrumentalsController < ApplicationController
    # skip_before_action :authorize, only: :index

    def index
        allBeats = Instrumental.all
        render json: allBeats
    end

    def show
        beat = Instrumental.find(params[:id])
        render json: beat
    end


end
