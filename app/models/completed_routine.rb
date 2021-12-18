class CompletedRoutine < ApplicationRecord
  belongs_to :user
  has_many :routine_exercises
end
