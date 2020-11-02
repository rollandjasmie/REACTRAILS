Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only:[:show,:create,:update,]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"

  resources :logements do
  end
  put "/logements/:longement_id/adresse",to:"adresses#update"
  put "/avatar",to:"avatars#create"
end
