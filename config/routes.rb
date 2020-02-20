Rails.application.routes.draw do
  root 'draw#index'
  resources :waves
  get '/small/circle.png', to: 'draw#circle'
end
