Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'about', to: 'cover#about'
  get 'about/advertiser_support', to: 'cover#advertiser_support'
  get 'about/npaw', to: 'cover#npaw'
  get 'about/content_moderator', to: 'cover#content_moderator'
  get 'about/customer_service', to: 'cover#customer_service'
  get 'about/tourist_guide', to: 'cover#tourist_guide'
  get 'about/marketing', to: 'cover#marketing'
end
