Rails.application.routes.draw do
  resources :plants do
    resources :climates, only: [:show]
  end
  resources :users
  resources :user_plants


  resources :climates, only: [:show, :index]

  #Session
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #User
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

end
