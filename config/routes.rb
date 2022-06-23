Rails.application.routes.draw do
  resources :meals
  resources :champions
  resources :workouts
  resources :diets
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  #end point for login

  post '/login', to: "sessions#login"

  #end point for logout
  delete '/logout', to: 'sessions#logout'

   #end point for authorized user
  get '/authorized_user', to: 'users#show'
end
