Rails.application.routes.draw do
  root 'draw#index'
  resources :waves
  resources :scenes
  get '/small/circle.png', to: 'draw#circle'
end
