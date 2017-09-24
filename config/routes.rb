Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :recommendations, only: [:index, :update]
    jsonapi_resources :interactions, only: [:index, :create]
    jsonapi_resources :users, only: [:index, :create]
  end
end
