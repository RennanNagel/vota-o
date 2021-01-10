Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
  end
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: "campaigns#index"
  resources :campaigns, only: [:index, :show]
  resources :like

  
end