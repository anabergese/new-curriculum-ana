Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root to: 'cover#about'

  get '/advertiser_support', to: 'cover#advertiser_support'
  get '/npaw', to: 'cover#npaw'
  get '/content_moderator', to: 'cover#content_moderator'
  get '/technical_engineer', to: 'cover#technical_engineer'
  get '/tourist_guide', to: 'cover#tourist_guide'
  get '/marketing', to: 'cover#marketing'
end
