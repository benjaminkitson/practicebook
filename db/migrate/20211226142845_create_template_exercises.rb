class CreateTemplateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :template_exercises do |t|
      t.references :routine_template, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true
      t.integer :duration
      t.timestamps
    end
  end
end
