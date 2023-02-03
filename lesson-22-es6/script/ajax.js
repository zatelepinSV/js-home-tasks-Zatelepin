'use strict';

const link = 'https://fe.it-academy.by/AjaxStringStorage2.php';
let wrapper = document.getElementById('wrapper');
let dataArray;
let houses = '';
let pageId;
let state;
window.onhashchange = renderNewState;

function renderNewState() {
  const hash = window.location.hash;
  state = decodeURIComponent(hash.substr(1));
  state = state ? JSON.parse(state) : {page: 'first'};
  dataLoad();
}

function dataLoad() {

  $.ajax({
    url: link,
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {
      f: 'READ',
      n: 'Sergey',
    },
    success: handleDataS,
    error: errorHandler,
  });
}

function handleDataS(data) {
  getList(data);
  renderPage();
}

function getList(data) {
  houses = '';
  dataArray = JSON.parse(data.result);
  houses += `<ul id="menu">`;
  houses += dataArray.map(item => `<li>
      <span id="${item.id}" onclick="goToPage()">
          ${item.name}</span>
      </li>`).sort().join('');
  houses += `</ul>`;
  /*<span className="firstLetter">${item.name[0]}</span>*/
}

function renderPage() {

  let page = '';

  switch (state.page) {
    case 'first':
      page += `<h1>The Great Houses</h1> 
      <p id="pagesLists" onclick="goToPage()">Show list</p>`;
      break;
    case 'pagesLists':
      page += `<h1>GOT</h1> 
      <p id="lists"><b>Великие дома</b> (ориг. <i>Great House</i>) — самые могущественные и влиятельные из знатных домов в 
      Семи Королевствах. Они представляют громадный авторитет и силу среди их вассалов и территорий, а подчиняются 
      только королю на железном троне. </p>`;
      page += houses;
      break;
    case `${state.page}`:
      page += houses;
      $.ajax(`pages/${state.page}.html`,
        {
          type: 'GET',
          dataType: 'html',
          success: dataLoaded,
          error: errorHandler
        });

    function dataLoaded(data) {
      let div = document.createElement('div');
      wrapper.appendChild(div);
      div.id = 'info';
      document.getElementById('info').innerHTML =
        `${data} <img src="img/${state.page}.jpg" alt="${state.page}">`;
    }

      break;
  }
  document.getElementById('wrapper').innerHTML = page;
}

function goToPage() {
  pageId = event.target.id;
  console.log(pageId)
  switchToState({page: `${pageId}`});
}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

renderNewState();

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  console.log(StatusStr + ' ' + ErrorStr);
}

let mp3 = new Audio('audio/game.mp3');

document.addEventListener("click", function () {
  if (mp3.paused) {
    mp3.play();
    mp3.loop = true;
  }
});

