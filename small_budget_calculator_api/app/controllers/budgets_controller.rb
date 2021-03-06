class BudgetsController < ApplicationController
  before_action :set_budget, only: %i[ show update destroy ]

  # GET /budgets
  def index
    budgets = Budget.all

    render json: budgets, include: [:expenses]
  end

  # GET /budgets/1
  def show
    render json: @budget, include: [:expenses]
  end

  # POST /budgets
  def create
    @budget = Budget.new(budget_params)
    # binding.pry
    if @budget.save
      render json: @budget, status: :created, location: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /budgets/1
  def update
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budgets/1
  def destroy
    # binding.pry
    @budget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def budget_params
      params.require(:budget).permit(:name, :description, :id)
    end
end
