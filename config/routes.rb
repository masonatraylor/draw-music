Rails.application.routes.draw do
  root 'draw#index'
  get '/', to: 'draw#index'
  get '/small/circle.png', to: 'draw#circle'
end
