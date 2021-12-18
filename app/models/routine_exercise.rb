class RoutineExercise < ApplicationRecord
  validates :name, presence: true
  belongs_to :routine_template
  belongs_to :completed_routine
end
