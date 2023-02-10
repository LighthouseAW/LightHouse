require 'stripe'
require 'dotenv'
Dotenv.load

class Api::ChargesController < ApplicationController
    skip_before_action :authorize

    def create
        Stripe.api_key = "pk_test_51MYwEsDhAuw7r76Wi0QsPuD8nJRJ4e0xn07ItYgI4CsZGNHneFLuQoXssdoroMlJ6atdCgjZT8c2SZ78Vxic0LRh00lR6iza07"
        token = params[:charge][:token]
        price = parmas[:price]

        charge = Stripe::Charge.create({
            amount: price,
            currency: 'usd',
            source: token,
            description: 'Test Charge!',
        })

        render json: charge
    end
end