# small-budget-calculator

Description
This is a small Single Page Application (SPA) for Budget calculate. Small Budget Calculator goal planning system not only helps you map out short-term expenses like birthday purty or weekend event, but also long-term savings goals like a trip to Europe or a car down payment. Small Budget Calculator was designed to put you in control of your own goal, quickly calculate and make a decision and being rewarded for doing so. 

The setups steps expect following tools installed on the system.
Github
Ruby 2.6.1
Rails 7.0.2.3
Javascript ES2015

Database Associations

Budgets 

Has Many Expenses 

Expenses

Belongs to Budget

Installation Instructions
git clone

from small-budget-calculator-api dirrectory:

bundle install

rake db:migrate

Run rake db:seed

rails s

small-budget-calculator-client dirrectory:

npm install
npm start

And now index.html will be open automatically in your brouser. 

How to use Program

Once the main page opened you can see all Budgets collection.

You can create new Budget by click create Budget buttom.

If you click by Budget open button you can see Budget show page with all list of expenses.
Here you can add new expenses or delete it.

You can also be able to calculate Budget total amount.

Contributions
Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License
The repo is available as open source under the terms of the MIT License.