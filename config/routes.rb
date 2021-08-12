Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create]
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"

  put "/players/:id/add_moment", to: "players#add_moment_to_player"
  resources :players
  resources :moments
end
