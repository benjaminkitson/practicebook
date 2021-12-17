class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
  end

  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new(exercise_params)
    @exercise.user = current_user
    if @exercise.save
      redirect_to exercises_path
    else
      render[:new]
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(:name, :description)
  end
end
