class Expense < ApplicationRecord
    has_many :budget_expenses, dependent: :destroy
    has_many :budgets, through: :budget_expenses
end
