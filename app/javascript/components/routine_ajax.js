const routineAjax = () => {

  function test(e) {
    e.preventDefault();
    console.log("hello")
  }

  const createButton = document.querySelector('.create-button');

  createButton.addEventListener('click', test)


}

export { routineAjax };
