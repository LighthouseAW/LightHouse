Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :employees
    resources :prayer_requests
    resources :blog_photos
    resources :blogposts
    resources :forms
    resources :project_photos
    resources :projects, only: [:index, :show], param: :slug
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      get "/me", to: "users#show"
      post "/signup", to: "users#create"

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
