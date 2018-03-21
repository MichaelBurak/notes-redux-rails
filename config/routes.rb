Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  devise_for :users
  resources :notes do
      root 'notes#index'
      get 'trash', on: :collection
      delete 'trash', action: 'destroyTrash', on: :collection
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
