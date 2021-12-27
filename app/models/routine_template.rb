class RoutineTemplate < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :exercises, through: :template_exercises
end
