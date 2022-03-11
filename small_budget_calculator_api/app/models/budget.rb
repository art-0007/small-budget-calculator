class Budget < ApplicationRecord
    has_many :budget_expenses, dependent: :destroy
    has_many :expenses, through: :budget_expenses 
end
