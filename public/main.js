function getGame() {
  document.getElementsByClassName('game')[0].textContent = '';
  const url = '/getGame';
  const name = document.getElementsByClassName('search-box')[0].value.toLowerCase();
  const xhr = new XMLHttpRequest();
  let response;
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState == 4) {
      response = JSON.parse(xhr.responseText);
    } else {
      console.log(`error${xhr.responseType}`);
    }

    const game = document.createElement('object');
    game.data = response[0];
    game.width = 650;
    game.height = 500;
    const cont = document.getElementsByClassName('games')[0];
    cont.appendChild(game);
  };
  xhr.open('POST', url);
  xhr.send(name);
}
