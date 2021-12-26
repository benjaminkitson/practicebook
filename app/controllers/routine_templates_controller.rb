class RoutineTemplatesController < ApplicationController

  def index
    @routine_templates = RoutineTemplate.all
  end

  def new
    @routine_template = RoutineTemplate.new
    @exercises = Exercise.all
    @routine_exercises = []
  end

  def create
    @routine_template = RoutineTemplate.new(routine_template_params)
    @routine_template.user = current_user

    # respond_to do |format|
    #   if @review.save
    #     format.html { redirect_to routine_template_path(@routine_template) }
    #     format.json # Follow the classic Rails flow and look for a create.json view
    #   else
    #     format.html { render :new }
    #     format.json { render :new } #Follow the classic Rails flow and look for a create.json view
    #   end
    # end
  end

  private

  def routine_template_params
    [params.require(:routine_template).permit(:name, :description), params.require(:routine_exercise).permit(:name, :description)].flatten
  end
end
