Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/dashboard', to: 'pages#dashboard', as: 'dashboard'
  resources :exercises, only: [:index, :new, :create, :edit, :update]
  resources :routine_templates, only: [:index, :new, :create, :show, :edit, :update]
  post '/routine_templates/:id', to: 'routine_templates#new_template_exercise', as: 'new_te'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
