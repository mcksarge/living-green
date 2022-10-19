Rails.application.routes.draw do
  resources :plants do
    resources :climates, only: [:show]
  end
  resources :users


  resources :climates, only: [:show, :index]

  #Session
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #User
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
 

  #UserPlants
  get "/myplants", to: "user_plant#index"
  get "/myplants/:id", to: "user_plant#myplants"
  post "/myplants/add", to: "user_plant#create"
  delete "/myplants/remove/:id", to: "user_plant#destroy"

end
