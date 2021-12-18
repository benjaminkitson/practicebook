const revealExerciseModal = () => {

  const addButton = document.querySelector('.new-add-exercise');
  const exerciseModal = document.querySelector('.modal-div')

  function fadeIn() {
    exerciseModal.classList.add('display-flex');
    setTimeout(function() {
      exerciseModal.classList.add('opacity-1');
    }, 1)
  }

  addButton.addEventListener("click", fadeIn);

};

export { revealExerciseModal };
