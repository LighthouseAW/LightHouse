    require 'stripe'
    require 'dotenv'
    Dotenv.load

    class Api::ChargesController < ApplicationController
        skip_before_action :authorize

        def create
            Stripe.api_key = "pk_test_51MYwEsDhAuw7r76Wi0QsPuD8nJRJ4e0xn07ItYgI4CsZGNHneFLuQoXssdoroMlJ6atdCgjZT8c2SZ78Vxic0LRh00lR6iza07"
            customer = Stripe::Customer.create
            ephemeralKey = Stripe::EphemeralKey.create({
                customer: customer['id'],
            }, {stripe_version: '2022-11-15'})
            paymentIntent = Stripe::PaymentIntent.create({
                amount: 1099,
                currency: 'eur',
                customer: customer['id'],
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