Rails.application.routes.draw do
  resources :budget_expenses
  resources :expenses
  resources :budgets
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
