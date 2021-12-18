class RoutineExercise < ApplicationRecord
  belongs_to :routine_template
  belongs_to :completed_routine
end
