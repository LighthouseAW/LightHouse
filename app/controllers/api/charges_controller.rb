require 'stripe'
require 'dotenv'

Dotenv.load

class Api::ChargesController < ApplicationController
    skip_before_action :authorize

    def create
        # Retrieve the price from the request parameters
        price = params[:price]

        # Set the API key for Stripe
        Stripe.api_key = "sk_test_51MYwEsDhAuw7r76W3hIw2fQnVVJixwEojclZH7jsv7s0bvV091uNaJo0ejjmgiykMjP3tzBtgxkGV9Vig4rzxjrU00a4mTUS7r"

        # Create a charge for the given price
        charge = Stripe::Charge.create({
        amount: price,
        currency: 'usd',
        source: params[:token],
        description: 'Example charge',
        })

        # Return a success response to the client
        render json: { status: 204 }
    rescue Stripe::CardError => e
        # Return an error response to the client if the charge was declined
        render json: { error: e.message }, status: :unprocessable_entity
    end
end

