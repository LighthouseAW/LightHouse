    require 'stripe'
    require 'dotenv'
    Dotenv.load

    class Api::ChargesController < ApplicationController
        skip_before_action :authorize

        def create
            price = params[:price]
            Stripe.api_key = "sk_test_51MYwEsDhAuw7r76W3hIw2fQnVVJixwEojclZH7jsv7s0bvV091uNaJo0ejjmgiykMjP3tzBtgxkGV9Vig4rzxjrU00a4mTUS7r"
            customer = Stripe::Customer.create
            ephemeralKey = Stripe::EphemeralKey.create({
                customer: customer['id'],
            }, {stripe_version: '2022-11-15'})
            paymentIntent = Stripe::PaymentIntent.create({
                amount: price,
                currency: 'usd',
                customer: customer['id'],
                payment_method_types: ['card'],
                automatic_payment_methods: {
                enabled: true,
                }
            })

            {
                paymentIntent: paymentIntent['client_secret'],
                ephemeralKey: ephemeralKey['secret'],
                customer: customer['id'],
                publishableKey: 'pk_test_51MYwEsDhAuw7r76Wi0QsPuD8nJRJ4e0xn07ItYgI4CsZGNHneFLuQoXssdoroMlJ6atdCgjZT8c2SZ78Vxic0LRh00lR6iza07'
            }.to_json
        end
    end