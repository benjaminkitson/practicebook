class Exercise < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :routine_templates, through: :template_exercises
end
