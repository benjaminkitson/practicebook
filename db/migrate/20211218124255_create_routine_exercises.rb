class CreateRoutineExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :routine_exercises do |t|
      t.string :name
      t.text :description
      t.integer :duration
      t.integer :tempo
      t.references :routine_template, null: false, foreign_key: true
      t.references :completed_routine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
