window.onload = function() {
    var button = document.getElementById('myButton');

    button.style.position = 'absolute';
    button.style.left = '0px';
    button.style.top = '0px';

    button.addEventListener('mouseover', function(event) {
        var buttonWidth = button.offsetWidth;
        var buttonHeight = button.offsetHeight;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var randomX = Math.random() * (windowWidth - buttonWidth);
        var randomY = Math.random() * (windowHeight - buttonHeight);

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    });
}
