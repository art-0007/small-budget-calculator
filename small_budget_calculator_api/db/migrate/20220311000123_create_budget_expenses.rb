class CreateBudgetExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :budget_expenses do |t|
      t.integer :amount
      t.belongs_to :budget, index: true, foreign_key: true
      t.belongs_to :expense, index: true, foreign_key: true

      t.timestamps
    end
  end
end
