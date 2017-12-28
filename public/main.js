function getGame() {
  document.getElementsByClassName('game')[0].textContent = '';
  const url = '/getGame';
  const name = document.getElementsByClassName('search-box')[0].value.toLowerCase();
  const xhr = new XMLHttpRequest();
  let response;
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState == 4) {
      response = xhr.responseText;
      const game = document.createElement('object');
      game.data = response;
      game.width = 650;
      game.height = 500;
      const cont = document.getElementsByClassName('game')[0];
      cont.appendChild(game);
    } else {
      console.log(`error${xhr.responseType}`);
    }
  };
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({name}));
}
