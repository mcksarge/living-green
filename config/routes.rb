Rails.application.routes.draw do
  resources :plants do
    resources :climates, only: [:show]
  end
  resources :users


  resources :climates, only: [:show, :index]



end
