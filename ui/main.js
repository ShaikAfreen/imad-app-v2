console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('img');
img.onclick = function () {
   log.style.marginleft = '100px';   
};
