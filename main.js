(function () {

  const submitUserGuess = document.getElementById('submit-guess');
  const resetGuess = document.getElementById('reset');
  const userTips = document.getElementById('tips');
  const win = document.getElementById('win');
  const turnLeft = document.getElementById('turns-left');

  let randomNum;
  let previousGuess;
  let turn = 10;

  randomNum = Math.floor(Math.random() * 50) + 1;
  console.log(randomNum);


  submitUserGuess.addEventListener('click', event => {
    event.preventDefault();
    let userGuess = document.getElementById('guess').value;
    if (userGuess === '') {
      win.textContent = 'Add a number';
      userTips.textContent = '';

      return;
    }
    userGuess = Number(userGuess);
    if (userGuess > 50 || userGuess < 1) {
      win.textContent = 'Your guess should not exceed the limit';
      return;
    }
    else if (userGuess === isNaN) {
      win.textContent = 'Enter a number';
    }
    else if (userGuess === randomNum) {
      win.textContent = 'Congratulations, You WIN! 🎉🎉';
      win.style.color = '#1fc71f';
      submitUserGuess.style.display = 'none';
      resetGuess.style.display = 'inline-block';
    }
    else if (userGuess < randomNum) {
      userTips.textContent = 'Too Low';
      win.textContent = '';
      turn--;
      turnLeft.textContent = `You have ${turn} tries left`;
    }
    else if (userGuess > randomNum) {
      userTips.textContent = 'Too High';
      win.textContent = '';
      turn--;
      turnLeft.textContent = `You have ${turn} tries left`;
    }
    if (turn === 0) {
      win.textContent = '😢😢 GAME OVER You LOSE!';
      win.style.color = 'red';
      submitUserGuess.style.display = 'none';
      resetGuess.style.display = 'inline-block';
    }
  });


  resetGuess.addEventListener('click', event => {
    window.location.reload();
  });

})();