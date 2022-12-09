'use strict';
var dragImage = null;
var dragShiftX;
var dragShiftY;


var cont = document.getElementById('wrap');
var images = document.querySelectorAll('img');


function posObj(img) {
  for (var k = img.length - 1; k > -1; k--) {
    var posImgTop = img[k].offsetTop - 10;
    var posImgLeft = img[k].offsetLeft - 10;
    img[k].style.position = 'absolute';
    img[k].style.top = posImgTop + 'px';
    img[k].style.left = posImgLeft + 'px';
    img[k].addEventListener('mousedown', dragStart);
  }
}
function dragStart(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  dragImage = EO.target;
  EO.target.style.cursor = 'grab';
  dragImage.style.position = 'absolute';
  dragImage.style.opacity = '1';
  dragImage.style.zIndex = '1';
  dragShiftX = EO.pageX - dragImage.offsetLeft;
  dragShiftY = EO.pageY - dragImage.offsetTop;
  cont.addEventListener('mousemove', dragMove);

}

function dragMove(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  dragImage.style.left = EO.pageX - dragShiftX + 'px';
  dragImage.style.top = EO.pageY - dragShiftY + 'px';
  cont.addEventListener('mouseup', dragStop);
}

function dragStop(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  dragImage.style.cursor = 'auto';
  dragImage.style.zIndex = null;
  cont.removeEventListener('mousedown', dragStart);
  cont.removeEventListener('mousemove', dragMove);
}

posObj(images)
