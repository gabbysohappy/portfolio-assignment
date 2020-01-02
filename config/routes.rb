Rails.application.routes.draw do
  namespace :api do
    resources :gabblogs do
      resources :posts
    end
  end
end
