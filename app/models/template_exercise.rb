class TemplateExercise < ApplicationRecord
  belongs_to :routine_template, optional: true
  belongs_to :exercise, optional: true
end
