// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"
import { revealExerciseModal } from '../components/reveal_exercise_modal.js'
import { hideExerciseModal } from '../components/hide_exercise_modal.js'
import { addExercise } from '../components/add_exercise.js'
// import { routineAjax } from '../components/routine_ajax.js'

document.addEventListener('turbolinks:load', () => {
  revealExerciseModal();
})

document.addEventListener('turbolinks:load', () => {
  hideExerciseModal();
})

document.addEventListener('turbolinks:load', () => {
  addExercise();
})

// document.addEventListener('turbolinks:load', () => {
//   routineAjax();
// })
