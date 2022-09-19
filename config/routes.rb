Rails.application.routes.draw do
  resources :plants
  resources :climates, only: [:show, :index]



end
