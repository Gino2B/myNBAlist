Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"
  put "/users/:id/add_player", to: "users#add_player_to_user"
  get "/users/:id", to: "users#show"
  resources :users, only: [:create]
  put "/players/:id/add_moment", to: "players#add_moment_to_player"
  resources :players
  resources :moments
end
