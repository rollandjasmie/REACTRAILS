Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only:[:show,:create,:update,]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"

  resources :logements
  put "/logements/:longement_id/adresse",to:"adresses#update"
  put '/logements/:longement_id/map',to:"maps#update"
  put '/logements/:longement_id/conditions',to:"conditions#upadte"


end
