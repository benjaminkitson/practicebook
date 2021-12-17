# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

exercise_1 = Exercise.new(name: "Major scale modes, 3nps", description: "Practicing the 3nps shapes of all 7 modes of the major scale, eigth notes at the given tempo", user_id: 1)
exercise_1.save!

exercise_2 = Exercise.new(name: "Trills", description: "Trills off first finger for 2nd, 3rd and 4th fingers", user_id: 1)
exercise_2.save!

exercise_3 = Exercise.new(name: "Tremolo picking", description: "Tremolo picking on all strings, fretted at 5", user_id: 1)
exercise_3.save!
