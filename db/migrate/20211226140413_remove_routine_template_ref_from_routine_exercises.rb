class RemoveRoutineTemplateRefFromRoutineExercises < ActiveRecord::Migration[6.1]
  def change
    remove_reference :routine_exercises, :routine_template, null: false, foreign_key: true
  end
end
