const body = document.body;
const randomColorRGB = document.getElementsByTagName('h1')[0];
const copyMessage = document.getElementsByClassName('copy-message')[0];

function generateColor(key) {
    if(key.keyCode == '32' || key.keyCode == '13'){
        //generate color
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const randomColor = `RGB(${red}, ${green}, ${blue})`;
        //display color
        body.style.backgroundColor = randomColor;
        randomColorRGB.innerText = randomColor;
        //change text color
        if(red < 100 || green < 100 || blue < 100){
            randomColorRGB.style.color = 'white'
            copyMessage.style.color = 'white'
        }
        else {
            randomColorRGB.style.color = 'black' 
            copyMessage.style.color = 'black'
        }
        //don't display copy message
        copyMessage.style.display = 'none';
    }
}
function copyColor() {
    if(randomColorRGB.innerText != 'Press Space or Enter') {
    copyMessage.style.display = 'block';
    //copy color
    navigator.clipboard.writeText(randomColorRGB.innerText);
    }
}

body.addEventListener('keydown', generateColor);
randomColorRGB.addEventListener('click', copyColor);