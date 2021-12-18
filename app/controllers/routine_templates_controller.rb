class RoutineTemplatesController < ApplicationController
  def index
    @routine_templates = RoutineTemplate.all
  end

  def new
    @routine_template = RoutineTemplate.new
    @exercises = Exercise.all
  end

  def create
    @routine_template = RoutineTemplate.new(routine_template_params)
    @routine_template.user = current_user
    if @routine_template.save
      redirect_to routine_templates_path
    else
      render[:new]
    end
  end

  private

  def routine_template_params
    params.require(:routine_template).permit(:name, :description)
  end
end
