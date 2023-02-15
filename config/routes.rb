Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :instrumentals, only: [:index, :show]
    resources :audio_files, only: [:index, :show]
    resources :users
    resources :carts
    resources :orders, only: [:index, :create, :show, :update, :destroy]
    resources :carts, only: [:create, :show] do
      resources :orders, only: :create
    end
    resources :leases
    resources :purchases

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post '/orders/purchase', to: 'orders#purchase'
    get "/download/:id", to: "download#show", as: :download
    post "/charges", to: "charges#create"

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
