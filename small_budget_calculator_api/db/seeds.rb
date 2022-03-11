# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

myVac = Budget.create(name: 'My vacation', description: 'Our July vacation to Florida')
myVac.expenses.create(name: 'Flight tickets', amount: 1000)
myVac.expenses.create(name: 'Lodging(per night)', amount: 200)
myVac.expenses.create(name: 'Activities(per day)', amount: 100)
