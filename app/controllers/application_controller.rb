class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
  before_action :authorize
  before_action :guest

  private

  def guest
    return if session[:user_id]
    @guest = User.find_or_create_by(email: "Guest")
    session[:user_id] = @guest.id
    carts = @guest.carts.create!
  end


  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: {errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def not_found_response(exception)
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def invalid_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end