const hideExerciseModal = () => {

  const items = document.querySelectorAll('.add-item');
  const closeButton = document.querySelector('.cancel');
  const exerciseModal = document.querySelector('.modal-div')

  function fadeOut() {
    exerciseModal.classList.remove('opacity-1');
    setTimeout(function() {
      exerciseModal.classList.remove('display-flex');
    }, 501)
  }

  items.forEach(item => {item.addEventListener("click", fadeOut)});
  closeButton.addEventListener("click", fadeOut);

};

export { hideExerciseModal };
