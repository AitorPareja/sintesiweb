// mostrar barra inferiro al bajar

window.onscroll = function () {
    var scrollHeight, totalHeight;
    scrollHeight = window.scrollY;
    totalHeight = document.body.scrollHeight - window.innerHeight;
    if ((scrollHeight / totalHeight) >= 0.95) { 
        document.querySelector('.navbar-bottom').style.display = 'block';
    } else {
        document.querySelector('.navbar-bottom').style.display = 'none';
    }
};
