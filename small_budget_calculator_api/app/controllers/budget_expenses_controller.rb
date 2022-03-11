class BudgetExpensesController < ApplicationController
  before_action :set_budget_expense, only: %i[ show update destroy ]

  # GET /budget_expenses
  def index
    @budget_expenses = BudgetExpense.all

    render json: @budget_expenses
  end

  # GET /budget_expenses/1
  def show
    render json: @budget_expense
  end

  # POST /budget_expenses
  def create
    @budget_expense = BudgetExpense.new(budget_expense_params)

    if @budget_expense.save
      render json: @budget_expense, status: :created, location: @budget_expense
    else
      render json: @budget_expense.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budget_expenses/1
  def update
    if @budget_expense.update(budget_expense_params)
      render json: @budget_expense
    else
      render json: @budget_expense.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budget_expenses/1
  def destroy
    @budget_expense.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget_expense
      @budget_expense = BudgetExpense.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def budget_expense_params
      params.require(:budget_expense).permit(:budget_id, :expense_id, :amount)
    end
end
