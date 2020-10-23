Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to:"static#home"
  resources :sessions,only:[:create]
  post :registrations, to:"registrations#create"
  delete :logout,   to: 'sessions#logout'
  get :logged_in, to: 'sessions#is_logged'
  resources :logements do
    resources :chambre
end
end