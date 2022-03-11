class CreateExpenses < ActiveRecord::Migration[7.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.integer :budget_id
      t.integer :amount

      t.timestamps
    end
  end
end
