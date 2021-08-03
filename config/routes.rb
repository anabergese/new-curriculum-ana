Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'cover#about'
  get '/advertiser_support', to: 'cover#advertiser_support'
  get '/npaw', to: 'cover#npaw'
  get '/content_moderator', to: 'cover#content_moderator'
  get '/customer_service', to: 'cover#customer_service'
  get '/tourist_guide', to: 'cover#tourist_guide'
  get '/marketing', to: 'cover#marketing'
end
