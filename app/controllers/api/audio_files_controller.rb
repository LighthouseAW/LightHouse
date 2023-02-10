class Api::AudioFilesController < ApplicationController
    # skip_before_action :authorize, only: :index

    def index
        f = AudioFile.all
        render json: f
    end
end
