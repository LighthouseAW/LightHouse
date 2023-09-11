class Api::ProjectsController < ApplicationController

    def index
        allProjects = Project.all
        render json: allProjects
    end

    def show
        proj = Project.find(params[:id])
        render json: proj
    end
end
