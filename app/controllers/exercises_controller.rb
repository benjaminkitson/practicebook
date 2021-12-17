class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.All
  end
end
