'use strict';
var dragImage = null;
var dragShiftX;
var dragShiftY;


/*images.forEach(function (item) {
  item.addEventListener('mousedown', Drag_Start);
});*/
var cont = document.getElementById('wrap');

var images = document.querySelectorAll('img');


function posObj(img) {
  for (var k = img.length - 1; k > -1; k--) {
    var posImgTop = img[k].offsetTop - 10;
    var posImgLeft = img[k].offsetLeft - 10;
    img[k].style.position = 'absolute';
    img[k].style.top = posImgTop + 'px';
    img[k].style.left = posImgLeft + 'px';
    img[k].style.zIndex = k;
    img[k].addEventListener('mousedown', dragStart);
  }
}
function dragStart(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  dragImage = EO.target;
  console.log(EO.type);
  console.log(dragImage.tagName);
  /*EO.target.style.cursor = 'wait';*/
  EO.target.style.position = 'absolute';
  EO.target.style.opacity = '1';
  dragShiftX = EO.pageX - dragImage.offsetLeft;
  dragShiftY = EO.pageY - dragImage.offsetTop;
  console.log(EO.pageX);
  cont.addEventListener('mousemove', dragMove);

}

function dragMove(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  dragImage.style.left = EO.pageX - dragShiftX + 'px';
  dragImage.style.top = EO.pageY - dragShiftY + 'px';
  console.log('тащи');
  console.log(dragShiftX);
  console.log(dragImage.style.left);

  cont.addEventListener('mouseup', dragStop);
}

function dragStop(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  /*EO.target.style.opacity = '1';*/
  cont.removeEventListener('mousemove', dragMove);


}

posObj(images)
/*function setImgStyles(inputImage, index) {
  console.log(inputImage);
  var posImgTop = inputImage.offsetTop -10 ;
  console.log(posImgTop);
  var posImgLeft = inputImage.offsetLeft -10 ;
  console.log(posImgLeft);
  inputImage.style.position = 'absolute';
  inputImage.style.top = posImgTop + 'px';
  console.log(inputImage.style.top);
  inputImage.style.left = posImgLeft + 'px';
  /!*img[k].style.margin = '10px';*!/
  console.log(inputImage.style.left);
  inputImage.style.zIndex = index;
}*/
/*setTimeout(posObj, 1000, images);*/



/* img[k].addEventListener('load',(event) => console.log(event) );*/
/*img[k].onload = ((event) => setImgStyles(event.target, k));*/

/*return img;*/