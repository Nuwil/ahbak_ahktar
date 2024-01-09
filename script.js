function playAudio() {
    var audio = document.getElementById('myAudio');
    var header = document.getElementById('header');
    var button = document.querySelector('button'); 

    header.style.backgroundImage = 'url("images/picture.jpg")';

    button.style.display = 'none';

    audio.style.display = 'none';
    audio.play();

    audio.addEventListener('ended', function () {
        audio.style.display = 'none';
    });
}
