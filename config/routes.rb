Rails.application.routes.draw do
  resources :user, only: [:index, :show]

  get '/users/:id/friends', to: 'user#friends', as: 'friends'

  devise_for :users
  root to: 'application#angular'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
