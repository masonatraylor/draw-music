Rails.application.routes.draw do
  root 'draw#index'
  resources :draws
  get '/small/circle.png', to: 'draw#circle'
end
