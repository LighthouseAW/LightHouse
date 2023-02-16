require 'stripe'
require 'dotenv'

Dotenv.load

        # Set the API key for Strip

    class Api::ChargesController < ApplicationController
        skip_before_action :authorize
        def create
            amount = params[:price]
            token = params[:charge][:token]

            Stripe.api_key = "sk_test_51MYwEsDhAuw7r76W3hIw2fQnVVJixwEojclZH7jsv7s0bvV091uNaJo0ejjmgiykMjP3tzBtgxkGV9Vig4rzxjrU00a4mTUS7r"
            customer = Stripe::Customer.create(source: token.id)

            charge = Stripe::Charge.create(
                amount: amount,
                currency: 'usd',
                customer: customer.id,
                source: token.id
            )
            if charge.paid
                render json: { message: 'Payment processed successfully' }, status: :ok
            else
                render json: { error: 'Payment processing failed' }, status: :unprocessable_entity
            end
            rescue Stripe::CardError => e
                render json: { error: e.message }, status: :unprocessable_entity
            end
        end
