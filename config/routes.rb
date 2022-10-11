Rails.application.routes.draw do
  resources :plants do
    resources :climates, only: [:show]
  end
  resources :users


  resources :climates, only: [:show, :index]

  #Session
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
