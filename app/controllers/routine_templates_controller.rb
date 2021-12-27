class RoutineTemplatesController < ApplicationController

  def index
    @routine_templates = RoutineTemplate.all
  end

  def new
    @routine_template = RoutineTemplate.new
    @exercises = Exercise.all
    session[:template_exercises] = []
    @session_exercises = session[:template_exercises]
  end

  def create
    @routine_template = RoutineTemplate.new(routine_template_params)
    @routine_template.user = current_user
    @routine_template.save
    session[:template_exercises].each do |template_exercise|
      template_exercise[:routine_template_id] = @routine_template.id
      TemplateExercise.create(template_exercise)
    end


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

  def show
    @routine_template = RoutineTemplate.find(params[:id])
    @exercises = TemplateExercise.where(routine_template_id: params[:id])
  end

  def new_template_exercise
    template_exercise = TemplateExercise.new(routine_exercise_params)
    session[:template_exercises].push(template_exercise)
    @session_exercises = session[:template_exercises]
  end

  private

  def routine_template_params
    params.require(:routine_template).permit(:name, :description)
  end

  def routine_exercise_params
    params.permit(:exercise_id)
  end

end
