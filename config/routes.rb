Rails.application.routes.draw do
  namespace :api do
    resources :gabblogs
  end
end
