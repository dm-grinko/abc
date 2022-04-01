var audioElement = document.getElementById('audio');

audioElement.addEventListener('click', (event) => {
    const sound = event.target.textContent;
    console.log('sound', sound)
    var audio = new Audio(`./audio/${sound}.wav`);
    audio.play();
})