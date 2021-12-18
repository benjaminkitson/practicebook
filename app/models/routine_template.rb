class RoutineTemplate < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :routine_exercises
end
