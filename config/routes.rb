Rails.application.routes.draw do
  resources :notes do
      get 'trash', on: :collection
      delete 'trash', action: 'destroyTrash', on: :collection
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
