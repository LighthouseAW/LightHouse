class Api::EmployeesController < ApplicationController

    def index
        allStaff = Employee.all
        render json: allStaff
    end

    def show
        staff = Employee.find(params[:id])
        render json: staff
    end

end
