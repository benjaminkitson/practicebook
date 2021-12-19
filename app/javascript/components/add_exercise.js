const addExercise = () => {

  const exercisesContainer = document.querySelector('.routine-exercises-container');
  const plusButtons = document.querySelectorAll('.add-item');

  function test() {
    const name = this.getAttribute("data-name")
    const description = this.getAttribute("data-description")
    const html = `<div class=\"item\"><div class=\"exercise-index-preview\">${name}</div><div class=\"item-description\">${description}</div><div><i class=\"fas fa-plus add-item\" data-name=\"Shred\" data-description=\"play fast lol\"></i></div></div>`
    exercisesContainer.insertAdjacentHTML('beforeend', html)
  };

  plusButtons.forEach( plusButton => {
    plusButton.addEventListener('click', test);
  });

}

export { addExercise };
