document.querySelector('#h2').onmouseover = function(){
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);
    document.querySelector('header').style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}