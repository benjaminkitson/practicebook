class RoutineExercise < ApplicationRecord
  validates :name, presence: true
  belongs_to :completed_routine, optional: true
end
