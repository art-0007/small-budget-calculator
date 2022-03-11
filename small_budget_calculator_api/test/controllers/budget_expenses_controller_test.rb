require "test_helper"

class BudgetExpensesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @budget_expense = budget_expenses(:one)
  end

  test "should get index" do
    get budget_expenses_url, as: :json
    assert_response :success
  end

  test "should create budget_expense" do
    assert_difference("BudgetExpense.count") do
      post budget_expenses_url, params: { budget_expense: { amount: @budget_expense.amount, budget_id: @budget_expense.budget_id, expense_id: @budget_expense.expense_id } }, as: :json
    end

    assert_response :created
  end

  test "should show budget_expense" do
    get budget_expense_url(@budget_expense), as: :json
    assert_response :success
  end

  test "should update budget_expense" do
    patch budget_expense_url(@budget_expense), params: { budget_expense: { amount: @budget_expense.amount, budget_id: @budget_expense.budget_id, expense_id: @budget_expense.expense_id } }, as: :json
    assert_response :success
  end

  test "should destroy budget_expense" do
    assert_difference("BudgetExpense.count", -1) do
      delete budget_expense_url(@budget_expense), as: :json
    end

    assert_response :no_content
  end
end
