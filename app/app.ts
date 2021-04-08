function startGame(){
  //Start the game
  let messageElement = document.getElementById('messages');
  messageElement!.innerHTML = 'Hello World';
}

document.getElementById('startGame')!.addEventListener('click',startGame);