# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

myVac = Budget.create(name: 'My vacation', description: 'Our July vacation to Florida')
my_flight_tickets = Expense.create(name: 'Flight tickets')
my_lodging = Expense.create(name: 'Lodging(per night)')
my_activities = Expense.create(name: 'Activities(per day)')
BudgetExpense.create(budget_id: myVac.id, expense_id: my_flight_tickets.id, amount: 1000 )
BudgetExpense.create(budget_id: myVac.id, expense_id: my_lodging.id, amount: 200 )
BudgetExpense.create(budget_id: myVac.id, expense_id: my_activities.id, amount: 100 )