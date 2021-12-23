const routineAjax = () => {

  const createButton = document.querySelector('.create-button');
  const createForm = document.getElementById('new_routine_template');

  function test() {

  }

  function send(e) {
    e.preventDefault();
    const exerciseTexts = document.querySelectorAll('.ajax');
    const ajaxArray = []

    exerciseTexts.forEach(exerciseText => {
      ajaxArray.push([["routine_exercise[name]", exerciseText.getAttribute("data-e-name")], ["routine_exercise[description]", exerciseText.getAttribute("data-e-description")]])
    })

    console.log(ajaxArray)
    let form = new FormData(createForm)
    for (const entry of form.entries()) {
      console.log(entry);
    }
    // fetch(this.formTarget.action, {
    //   method: 'POST',
    //   headers: { 'Accept': "application/json", 'X-CSRF-Token': csrfToken() },
    //   body: new FormData(this.formTarget)
    // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   });
  }

  // createButton.addEventListener('click', send)
  createForm.addEventListener('submit', send)

}

export { routineAjax };
