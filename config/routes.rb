Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'about', to: 'cover#about'
  get 'about/jobs', to: 'cover#experiences'
end
